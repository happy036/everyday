INSERT INTO score VALUES(NULL,901,'计算机',98);
  INSERT INTO score (stu_id,c_name,grade) VALUES
  (901,'英语',80),
  (902,'计算机',65),
  (902,'中文',88),
  (903,'中文',95),
  (904,'计算机',70),
  (904,'英语',92),
  (905,'英语',94),
  (906,'计算机',90),
  (906,'英语',85);

SELECT * FROM student;
SELECT id,`name`,department FROM student;
SELECT *FROM student WHERE department='计算机系'OR department='英语系';
SELECT *FROM student WHERE 2020-birth BETWEEN 18 AND 24;
SELECT sex ,COUNT(*)AS `人数` FROM student GROUP BY sex ;
SELECT sex ,COUNT(*)AS `人数` FROM student GROUP BY sex ORDER BY '人数' DESC ;
SELECT department ,COUNT(department) FROM student GROUP BY department;

SELECT c_name, MAX(grade)FROM score GROUP BY c_name;
SELECT stu_id,c_name,SUM(grade)FROM score GROUP BY stu_id;
SELECT c_name,AVG(grade)FROM score GROUP BY c_name;
SELECT stu_id,grade FROM score WHERE c_name='计算机' ORDER BY grade DESC ;
SELECT*FROM score WHERE NOT(stu_id IN(902,904,906)) && grade>80;
SELECT `name` ,department FROM student WHERE `name` LIKE '王%' AND sex='男';
SELECT*FROM student WHERE `name` LIKE '张_';
SELECT CONCAT(`name`,'的家庭住址是',address)AS '住址' FROM student;
SELECT REPLACE(`name`,'王','小王') FROM student;
SELECT LENGTH(NAME)AS '姓名所占字节' ,NAME FROM student;
SELECT*FROM score LIMIT 3;
SELECT*FROM score LIMIT 3,3;
SELECT `name` ,2020-birth AS '年龄' FROM student;