INSERT INTO student(SID,Sname,Sage,Ssex) VALUES (01,"赵雷","1990-01-01 00:00:00",'男'), 
(02,"钱电","1990-12-21 00:00:00",'男'),
(03,"孙风","1990-05-20 00:00:00",'男'),
(04,"李云","1990-08-06 00:00:00",'男'),
(05,"周梅","1991-12-01 00:00:00",'女'),
(06,"吴兰","1992-03-01 00:00:00",'女'),
(07,"郑竹","1989-07-01 00:00:00",'女'),
(08,"王橘","1990-01-20 00:00:00",'女')
UPDATE student SET Sname='韩梅梅' WHERE SID=1;
UPDATE student SET Ssex='男' WHERE Sage<'1990';
DELETE FROM student WHERE Sage<'1990';

SELECT SID,Sname,Sage,Ssex FROM student;

SELECT DISTINCT Ssex FROM student;
SELECT * FROM student WHERE Sage>'1990';
SELECT * FROM student WHERE Sage>'1990' || Ssex='男';
SELECT * FROM student WHERE Ssex='男' ORDER BY Sage;
SELECT COUNT(*) FROM student;
SELECT COUNT(*) FROM student WHERE Ssex='男';
SELECT * FROM student WHERE Sname LIKE '赵';

SELECT * FROM student WHERE SID IN(01,06,03);
SELECT * FROM student WHERE Sage>'1990' AND Sage<'1991';