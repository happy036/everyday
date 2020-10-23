-- 整数
CREATE TABLE t_num(
	numtiny TINYINT UNSIGNED,
	numint INT(4) ZEROFILL
);
INSERT INTO t_num(numtiny,numint) VALUES (250, 250250);
INSERT INTO t_num(numtiny,numint) VALUES (251, 21);

-- 小数
CREATE TABLE t_float (
	numfl FLOAT(5,3),
	numdo DOUBLE(5,3),
	numde DECIMAL(5,3)
);

INSERT INTO t_float VALUES(12.345,12.345,14.345);
INSERT INTO t_float VALUES(12.3457,12.3457,14.3457);
INSERT INTO t_float VALUES(99.9999,99.9999,99.9999);
DESC t_float;

-- 日期类型
CREATE TABLE t_date(
ddate DATE,
dtime TIME,
ddatetime DATETIME,
dtimestamp TIMESTAMP,
dyear YEAR
 );

INSERT INTO t_date VALUES(NOW(),NOW(),NOW(),NOW(),NOW());
INSERT INTO t_date VALUES('2020-07-05',NULL,NULL,NOW(),NULL)
DESC t_date;
SHOW VARIABLES LIKE '%time_zone%'

-- 枚举 enum
CREATE TABLE t_enum(
el ENUM('a','b','c')
);
INSERT INTO t_enum VALUES('a');
INSERT INTO t_enum VALUES('b');
INSERT INTO t_enum VALUES('f');
SELECT * FROM t_enum;

-- 集合 set
CREATE TABLE t_set(
cs SET('a','b','c','d')
);
INSERT INTO t_set VALUES('a');
INSERT INTO t_set VALUES('a,b');
INSERT INTO t_set VALUES('a,b,c');
SELECT * FROM t_set;














CREATE TABLE student(
id INT(4),
sname VARCHAR(10),
age TINYINT(2) DEFAULT 18,
class VARCHAR(20)
);
INSERT INTO student VALUES(1,'张三',23,1208);
INSERT INTO student VALUES(2,'李四',22,1209);

CREATE TABLE teacher(
tid INT(4),
tname VARCHAR(10),
age TINYINT(2) DEFAULT 30,
tlesson VARCHAR(10)
);

INSERT INTO teacher VALUES(1,'王芳',33,'语文');
INSERT INTO teacher VALUES(2,'李明',36,'数学');


CREATE TABLE score(
sid INT NOT NULL COMMENT'学生编号',
cid INT NOT NULL COMMENT'班级编号',
slesson VARCHAR(10) COMMENT'科目',
score DECIMAL COMMENT'成绩'
);
INSERT INTO score VALUES(1,1208,'语文',99);
INSERT INTO score VALUES(2,1209,'数学',100);























#1.	列出至少有4个员工的所有部门
SELECT emp.deptno,dname,loc FROM emp,dept WHERE emp.deptno=dept.deptno GROUP BY deptno HAVING COUNT(emp.deptno)>=4;

#2.	列出薪金比“SMITH”多的所有员工。
SELECT*FROM emp WHERE sal>(SELECT sal FROM emp WHERE ename='SMITH');
#3.	列出所有员工的姓名及其直接上级的姓名
SELECT a.ename,(SELECT ename FROM emp AS b WHERE b.empno=a.mgr ) AS mar_name FROM emp AS a;
SELECT ename,mgr_name FROM emp,
#4.	列出受雇日期早于其直接上级的所有员工
#5.	列出部门名称和这些部门的员工信息，同时列出那些没有员工的部门
SELECT *FROM dept LEFT JOIN emp ON(emp.deptno = dept.deptno);
#6.	列出所有“CLERK”（办事员）的姓名及其部门名称
SELECT*FROM emp,dept WHERE job='CLERK' AND emp.deptno=dept.deptno;
#7.	列出最低薪金大于1500的各种工作
SELECT job FROM dept,emp WHERE emp.deptno=dept.deptno GROUP BY job HAVING MIN(sal)>1500;
#8.	列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号
SELECT empno,ename FROM dept,emp WHERE dname='SALES' AND emp.deptno=dept.deptno;
#9.	列出薪金高于公司平均薪金的所有员工
SELECT * FROM emp,dept WHERE sal>(SELECT AVG(sal) FROM emp) AND emp.deptno=dept.deptno;
#10.	列出与“SCOTT”从事相同工作的所有员工
SELECT * FROM emp WHERE job=(SELECT job FROM emp WHERE ename ='SCOTT');
#11.	列出薪金等于部门30中任意一个员工的薪金的所有员工的姓名和薪金
SELECT * FROM emp WHERE sal IN(SELECT sal FROM emp WHERE deptno=30);
#12.	列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金
SELECT * FROM emp WHERE sal >(SELECT MAX(sal) FROM emp WHERE deptno=30);
#13.	列出在每个部门工作的员工数量、平均工资
SELECT deptno,COUNT(*),AVG(sal) FROM emp GROUP BY deptno;
#14.	列出所有员工的姓名、部门名称和工资
SELECT emp.ename,dept.dname,emp.sal FROM dept,emp WHERE emp.deptno = dept.deptno;
#15.	列出所有部门的详细信息和部门人数
SELECT dept.*,COUNT(*)AS rs FROM dept INNER JOIN emp ON emp.deptno = dept.deptno WHERE emp.ename IS NOT NULL GROUP BY deptno;
#16.	列出各种工作的最低工资
SELECT job,MIN(sal) FROM emp GROUP BY job;
#17.	列出各个部门的MANAGER（经理）的最低薪金
SELECT deptno, MIN(sal)FROM emp WHERE job='MANAGER'GROUP BY deptno;
#18.	列出所有员工的年工资,按年薪从低到高排序
SELECT ename,sal*12 FROM emp ORDER BY sal*12;
#19.	查出emp表中薪水在3000以上（包括3000）的所有员工的员工号、姓名、薪水
SELECT empno,ename,sal FROM emp WHERE sal>=3000;
#20.	查询出所有薪水在'ALLEN'之上的所有人员信息
SELECT * FROM emp WHERE sal>(SELECT sal FROM emp WHERE ename='ALLEN');
#21.	查询出emp表中部门编号为20，薪水在2000以上（不包括2000）的所有员工，显示他们的员
SELECT empno AS'员工编号',ename AS '员工名字', sal AS '薪水' FROM emp WHERE sal>2000 AND deptno=20;
#22.	查询出emp表中所有的工作种类（无重复）
SELECT DISTINCT job FROM emp;
#23.	查询出所有奖金（comm）字段不为空的人员的所有信息
SELECT * FROM emp WHERE comm IS NOT NULL;
#24.	查询出薪水在800到2500之间（闭区间）所有员工的信息。（注：使用两种方式实现AND以及BETWEEN AND）
SELECT * FROM emp WHERE sal BETWEEN 800 AND 2500;
SELECT * FROM emp WHERE sal >= 800 AND sal < 2500;
#25.	查询出员工号为7521，7900，7782的所有员工的信息。（注：使用两种方式实现，OR以及IN）
SELECT * FROM emp WHERE empno IN(7521,7900,7782);
SELECT * FROM emp WHERE empno='7521' OR empno='7900' OR empno='7782' ;
#26.	查询出名字中有“A”字符，并且薪水在1000以上（不包括1000）的所有员工信息
SELECT * FROM emp WHERE ename LIKE '%A%' AND sal >1000;
#27.	查询出名字第三个字母是“M”的所有员工信息
SELECT * FROM emp WHERE ename LIKE '__M%'
#28.	将所有员工按薪水升序排序，按照入职时间降序排序
SELECT * FROM emp  GROUP BY sal,hiredate DESC;
#29.	查询出最早工作的那个人的名字、入职时间和薪水
#     分析：入职日期最小的 ---查询最小的入职日期
SELECT ename,hiredate,sal FROM emp WHERE hiredate = (SELECT MIN(hiredate) FROM emp);
#30.	显示所有员工的名字、薪水、奖金，如果没有奖金，暂时显示100
SELECT ename,sal,IFNULL(comm,100) FROM emp;
#31.	显示出薪水最高人的职位
SELECT job FROM emp WHERE sal=(SELECT MAX(sal) FROM emp);
#32.	查出emp表中所有部门的最高薪水和最低薪水，部门编号为10的部门不显示
#分析：按照部门分组，条件部门编号不等于10
SELECT deptno,MAX(sal),MIN(sal) FROM emp WHERE deptno != 10 GROUP BY deptno; 
#33.	删除10号部门薪水最高的员工
SELECT MAX(sal)FROM emp WHERE deptno=10
DELETE FROM emp WHERE deptno=10 AND sal=(SELECT MAX(sal)FROM emp WHERE deptno=10);
#34.	将薪水最高的员工的薪水降30%
#35.	查询员工姓名，工资和 工资级别(工资>=3000 为3级，工资>2000 为2级，工资<=2000 为1级)
#提示: CASE WHEN THEN 介绍









