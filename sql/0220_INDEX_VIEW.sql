CREATE INDEX idx_member_name ON member(member_name); -- 인덱스 만들기

SHOW INDEX FROM member; -- 인덱스 조회  

SELECT *
FROM INFORMATION_SCHEMA.STATISTICS
WHERE TABLE_SCHEMA = 'shop_db' AND TABLE_NAME = 'member'; -- 인덱스 조회

DROP INDEX idx_member_name ON member; -- 인덱스 삭제, 수정은 따로 없음

-- --------------------------------------------------------------------------------
CREATE VIEW member_view AS
SELECT * 
FROM member; -- 뷰 만들기

SELECT TABLE_NAME
FROM information_schema.VIEWS
WHERE TABLE_SCHEMA = DATABASE(); -- 뷰 조회

DROP VIEW member_view; -- 뷰 삭제

SELECT * FROM member_view; -- 뷰 사용

-- --------------------------------------------------------------------------------


