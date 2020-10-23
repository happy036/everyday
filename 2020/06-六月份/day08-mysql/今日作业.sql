#1)查询没有上级的员工全部信息（也就是说 员工上级编号为 NULL 的）

SELECT*FROM emp WHERE mgr IS NULL
  
#2)列出30号部门所有员工的姓名、薪资

SELECT*FROM emp WHERE deptno=30


#3)查询员工“TURNER”的员工编号和薪资

SELECT empno,sal FROM emp WHERE ename='TURNER'

#4) 查询10号部门的平均薪资、最高薪资、最低薪资

SELECT AVG(sal)AS'平均薪资',MAX(sal)AS'最高薪资',MIN(sal)AS'最低薪资'FROM emp WHERE deptno=10

#5)查询薪资最高的员工的信息  ----子查询

SELECT*FROM emp WHERE(sal)=(SELECT MAX(sal) FROM emp)

#6)列出薪金比员工“ TURNER ”多的所有员工姓名（ENAME）、员工薪资（SAL） , 再按照薪资降序排列  ----子查询
SELECT ename,sal FROM emp WHERE sal<(SELECT sal FROM emp WHERE ename='TURNER')ORDER BY sal DESC

#7)列出薪金高于公司平均薪金的所有员工姓名、薪金。----子查询
SELECT ename,sal FROM emp WHERE sal>(SELECT AVG(sal) FROM emp)

#8)列出与“SCOTT”从事相同工作的所有员工姓名、工作名称----子查询

SELECT ename,job FROM emp WHERE job=(SELECT job FROM emp WHERE ename='SCOTT' )

#9)列出与“SCOTT”从事相同工作的所有员工姓名、工作名称(且不展示Scott的姓名、工作) ----子查询
SELECT ename,job FROM emp WHERE job=(SELECT job FROM emp WHERE ename='SCOTT')AND NOT(ename='SCOTT')
