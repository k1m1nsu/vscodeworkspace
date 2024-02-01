#Python 3.7 부터 dictionary는 순서를 갖음 ordered(iterable) changeable(mutable)

dic = {} # 빈 딕셔너리 생성

alien_0 = { "color" : "green", "points": 25}

print(alien_0)

#dictionary에 key, value pair를 추가
alien_0["x_position"] = 0
alien_0["y_position"] = 25

print(alien_0)

#dictionary에서 key, value pair를 삭제무 
del alien_0["color"]

print(alien_0)
'''아래의 코드는 에러를 일으킨다.
print(alien_0["color"])
get() 메소드를 이용하면 키가 존재하지 않을 경우에
에러를 일으키지않고 디폴트 값을 받을 수 있다.

alien_0.get("color","값이 존재하지 않습니다.")
두 번째 argument 에 아무것도 입력하지 않으면 None을 리턴함
'''

print(alien_0.get("color","값이 존재하지 않습니다."))


#To use dictionary loop, use items() method. 
#it returns dict_items which can be iterated

print(type(alien_0.items()))

for k, v in alien_0.items():
	print(f"key: {k}")
	print(f"value: {v}")


#there's another way to loop dictionary, use keys() method.
#It returns dict_keys which also can be iterated
# dict_keys는 인덱스로 접근할 수 없다. 접근하고 싶으면 list() 함수로 랩핑해서 리스트로 변환하자

print(type(alien_0.keys()))

for k in alien_0.keys():
	print(f"\nkey: {k}")
	print(f"value: {alien_0[k]}")
#you can do the same thing. just dictionary with no method
#dictionary can be iterated

for k in alien_0:
	print(f"\n{k}")
	print(f"value: {alien_0[k]}")

# 키없이 값에 접근 하고 싶다면, values() 메소드를 이용해보자
print(type(alien_0.values()))
for v in alien_0.values():
	print(v)

# 이는 중복을 허용하는 리스트에 담겨서 나오기 때문에
# 중복을 허용하고싶지 않다면 set()을 이용하자.
# 아직 책에는 set가 나오지않았지만 아래 코드는 set이 iterable 하다는 사실을 보여준다.
print(type(set(alien_0.values())))
for v in set(alien_0.values()):
	print(v)