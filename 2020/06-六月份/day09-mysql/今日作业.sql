#1.	统计订购了商品的总人数。
SELECT COUNT(DISTINCT cid)FROM orderitem

#2.	统计顾客号和所订购商品总数量
SELECT cid,SUM(COUNT)FROM orderitem GROUP BY cid

#3.	查找没订购商品的顾客号和顾客名
SELECT cid,cname FROM customer WHERE cid NOT IN(SELECT cid FROM orderitem)

#4.	查找订购商品号'p001'商品数量最多的顾客号和顾客名
SELECT orderitem.cid,cname FROM customer,orderitem WHERE pid='p001'AND(SELECT MAX(COUNT)FROM orderitem)AND orderitem.cid=customer.cid
#5.	统计至少订购2种商品的顾客id和顾客名

#6.	查找所有顾客号和顾客名以及他们购买的商品号
SELECT orderitem.cid,cname,pid FROM customer,orderitem WHERE orderitem.cid=customer.cid
#7.	查找订购了商品"p001"的顾客号和顾客名
SELECT orderitem.cid,cname FROM customer,orderitem WHERE pid='p001' AND orderitem.cid=customer.cid
#8.	找订购了商品号为"p001"或者"p002"的顾客号和顾客名
SELECT customer.cid,customer.cname FROM customer LEFT OUTER JOIN orderitem ON (customer.cid=orderitem.cid) WHERE pid='p001' OR pid='p002' GROUP BY cid;
#9.	查找年龄在30至40岁的顾客所购买的商品名及商品单价
SELECT product.pname,product.pirce FROM customer LEFT OUTER JOIN orderitem ON(customer.cid=orderitem.cid) LEFT OUTER JOIN product ON(orderitem.pid=product.pid) WHERE age=(SELECT age FROM customer WHERE age BETWEEN 30 AND 40);
#10.	查找女顾客购买的商品号，商品名和价格
SELECT * FROM customer LEFT OUTER JOIN orderitem ON(customer.cid=orderitem.cid) LEFT OUTER JOIN product ON(orderitem.pid=product.pid)WHERE sex IN(SELECT sex FROM customer WHERE sex='女');