SELECT mem_name, addr
FROM member
WHERE addr = '경기' OR addr = '전남' OR addr = '경남';
-- 이런 경우 아래와 같이 IN() 을 사용하면 편함
SELECT mem_name, addr
FROM member
WHERE addr IN('경기', '전남', '경남');

SELECT height
FROM member
WHERE mem_name='우주소녀';

SELECT mem_name, height
FROM member
WHERE height >= (SELECT height
				FROM member
				WHERE mem_name='우주소녀');

SELECT mem_id, SUM(price*amount) 
FROM buy 
GROUP BY mem_id
HAVING SUM(price*amount) > 1000;

SELECT addr, count(addr) 
FROM member 
GROUP BY addr;


SELECT *
FROM member
ORDER BY  debut_date DESC
LIMIT 5;