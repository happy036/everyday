#1.	查询出只选修了一门课程的全部学生的学号和姓名
SELECT student.sid,sname FROM student,sc WHERE student.sid=sc.sid GROUP BY student.sid HAVING COUNT(sc.sid)<2;
#2.	查询不同课程成绩相同的学生的学号、课程号、学生成绩
SELECT sid,course.cid,score FROM sc,course WHERE  sc.cid != sc.cid

#3.	查询平均成绩大于70 的所有学生的学号、姓名和平均成绩
SELECT student.sid,sname,AVG(score) avgs FROM student,sc WHERE  student.sid=sc.sid GROUP BY student.sid HAVING AVG(score)>70;

#4.	查询所有学生的选课情况
SELECT student.sid,sname,course.cid,cname FROM student,course,sc WHERE student.sid=sc.sid AND sc.cid=course.cid;

#5.	查询课程名称为“数据库”，且分数低于60的学生姓名和分数;
SELECT sname,score FROM student,sc WHERE cid=(SELECT cid FROM course WHERE cname='数据库') AND student.sid=sc.sid AND score<60;
#6.	查询任何一门课程成绩在70分以上的姓名、课程名称和分数
SELECT sname,cname,score FROM student,course,sc WHERE student.sid=sc.sid AND sc.cid=course.cid AND score>70;
#7.	查询有不及格的课程的课程编号，课程名称，成绩，并按课程号从大到小排列
SELECT course.cid,cname,score FROM course,sc WHERE sc.cid=course.cid AND score<60 ORDER BY course.cid DESC;
#8.	查询选了课程编号为003且课程成绩在70分以上的学生的学号和姓名
SELECT student.sid,sname FROM student WHERE student.sid=(SELECT sid FROM sc WHERE cid=003 AND score>70);
#9.	查询选修“叶平”老师所授课程的学生中，成绩最高的学生姓名及其成绩
SELECT sname,cname,score FROM student,course,sc WHERE student.sid=sc.sid AND sc.cid=course.cid AND tid=(SELECT tid FROM teacher WHERE tname='叶平') GROUP BY cname HAVING MAX(score);

SELECT sname,cname,score FROM student,course,sc WHERE sc.cid IN(SELECT cid FROM course WHERE tid=(SELECT tid FROM teacher WHERE tname='叶平')) AND student.sid=sc.sid AND sc.cid=course.cid GROUP BY cname HAVING MAX(score);
#10.	查询没学过“叶平”老师讲授的任一门课程的学生姓名
SELECT student.sid,sname FROM student WHERE student.sid NOT IN(SELECT sid FROM sc WHERE sc.cid IN (SELECT cid FROM course WHERE tid=(SELECT tid FROM teacher WHERE tname='叶平')));
#11.	查询两门以上不及格课程的同学的学号及其平均成绩
SELECT sid,AVG(score),COUNT(*) FROM sc  GROUP BY sid HAVING AVG(score)<60 AND COUNT(*)>2;
