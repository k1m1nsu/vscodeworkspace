# 파이썬의 리스트는 mutable(changeable), ordered(iterable)
# 파이썬의 리스트는 [ ] 로 표현된다
bicycles = ['trek', 'cannodale', 'redline', 'specialized']

# 다음과 같이 빈 리스트를 생성할 수도 있다.
# bicycles = []

# 다음과 같이 리스트에 저장된 값에 접근할 수 있다.

print(bicycles[0])
# trek

# 이는 양의 정수만이 아닌 음의 정수로도 접근할 수 있다.

print(bicycles[-1])
# specialized

# 다음과 같이 리스트에 저장된 값을 수정할 수 있다.

bicycles[0] = 'ducati'
print(bicycles[0])
# ducati

# 다음과 같이 리스트에 마지막에 새로운 값을 추가할 수 있다.

bicycles.append('trek')
print(bicycles)
#['ducati', 'cannodale', 'redline', 'specialized', 'trek']

# 다음과 같이 리스트의 특정 인덱스의 위치에 값을 추가할 수 있다.

bicycles.insert(0,'wheels')
print(bicycles)
#['wheels', 'ducati', 'cannodale', 'redline', 'specialized', 'trek']

# 다음과 같이 특정 인덱스에 위치한 값을 삭제할 수 있다

del bicycles[0]
print(bicycles)
#['ducati', 'cannodale', 'redline', 'specialized', 'trek']

# 다음과 같이 특정 인덱스에 위치한 값을 삭제함과 동시에 값을 리턴 받을 수 있다.

bicycle = bicycles.pop(1)
print(bicycle)
# cannodale

print(bicycles)
#['ducati', 'redline', 'specialized', 'trek']

# 다음과 같이 특정 값을 가진 리스트의 아이템을 삭제할 수 있다.
# remove 함수를 이용해 특정 값을 가진 아이템을 지울 때 주의해야할 점은 같은 값을 지닌 아이템이
# 두 개 이상일 경우, 특정 값을 지닌 모든 아이템을 지우는 것이 아니라, 앞의 하나만을 지운다는 것이다.

bicycles.append('ducati')
bicycles.remove('ducati')
print(bicycles)
#['redline', 'specialized', 'trek', 'ducati']

# 다음과 같이 리스트를 정렬할 수 있다. (오름차순)

bicycles.sort()
print(bicycles)
# ['ducati', 'redline', 'specialized', 'trek']

# 다음과 같이 리스트를 정렬할 수 있다. (내림차순)

bicycles.sort(reverse=True)
print(bicycles)
#['trek', 'specialized', 'redline', 'ducati']

# 때로는 리스트를 정렬하되, 원래의 순서를 유지하고 싶을 수 있다. 그럴때는 sorted() 함수를 사용해서
# 정렬이 된 임시적인 리스트를 생성할 수 있다.

bicycles = ['redline', 'specialized', 'trek', 'ducati']
print(sorted(bicycles))
print(sorted(bicycles,reverse=True))
print(bicycles)
#['ducati', 'redline', 'specialized', 'trek']
#['trek', 'specialized', 'redline', 'ducati']
#['redline', 'specialized', 'trek', 'ducati']

# 오름차순이나 내림차순으로 정렬하는 것이 아닌 리스트의 순서를 거꾸로 하고 싶을때는 이렇게한다.

bicycles = ['redline', 'specialized', 'trek', 'ducati']

bicycles.reverse()
print(bicycles)
#['ducati', 'trek', 'specialized', 'redline']

# 리스트의 길이를 알고 싶을 땐, len() 함수를 이용한다.

bicycles = ['redline', 'specialized', 'trek', 'ducati']

length_list = len(bicycles)
print(length_list)
# 4

# 값이 숫자로 이루어진 리스트를 생성하는데 도움을 주는 range() 함수

'''
 range(parameter1, parameter2, parameter3) 는 range 객체를 리턴한다.
 따라서 리스트를 만들고 싶으면 list() 함수로 랩핑해야한다.
 파이썬 인터프리터에 type() 함수를 이용하면 무슨 자료형인지 알 수 있다.
 range() 의 parameter1 은 시작하는 숫자이고 parameter2에 도달하기전까지나 넘어서기전까지의 숫자를 만든다.
 parameter3의 값 만큼 건너뛰워서
'''

numbers = list(range(1,11,2))
print(numbers)
#[1, 3, 5, 7, 9]

# 숫자로 이루어진 리스트의 statistics

numbers = [1,2,3,4,5,6,7,8,9,10]
print(min(numbers))
# 1

print(max(numbers))
# 10

print(sum(numbers))
# 55

# List Comprehensions

squares = [ value**2 for value in range(1,11) ]
print(squares)
# [1,4,9,16,25,36,49,64,81,100]

# 때로는 리스트의 일정 부분만을 사용하고 싶을 때도 있을 것이다. 그럴 땐 파이썬의 slice 를 이용한다.

'''
 something_list[ argument1 : argument2 : argument3]
 슬라이스에는 세 가지의 argument 가 입력될 수 있다. 각각은 생략이 가능하고 각각이 가지는 의미는 이러하다.
 argument1부터 자르라는 것이다, argument2에 도달하기 전 까지, argument3 만큼 건너뛰워서
'''

players = ['barney','john','doe','karl','julia']

print(players[0:3])
# ['barney', 'john', 'doe']

print(players[1:4])
# ['john', 'doe', 'karl']

print(players[:3])
# ['barney', 'john', 'doe']

print(players[2:])
# ['doe', 'karl', 'julia']

print(players[-1:])
# ['julia']

print(players[:-1])
# ['barney', 'john', 'doe', 'karl']

print(players[0::2])
# ['barney', 'doe', 'julia']

# 슬라이스를 사용하여 리스트를 복사할 수 있다.

my_foods= ['pizza','pasta','chicken']
friend_foods = my_foods[:]

# my_foods 와 friend_foods 는 동일한 리스트를 참조하는 것이 아닌 각각의 리스트를 가진다.

friend_foods.append("carrot")

print(my_foods)
#['pizza', 'pasta', 'chicken']

print(friend_foods)
#['pizza', 'pasta', 'chicken', 'carrot']


# 비교연산자('==')를 사용하여 리스트를 비교하면 리스트가 가진 값들을 비교하여 결과를 내놓는다.

my_foods= ['pizza','pasta','chicken']
friend_foods = my_foods[:]

print(friend_foods==my_foods)
# True

friend_foods.append("carrot")

print(friend_foods==my_foods)
# False

# 참조하는 메모리 주소를 비교하는 것이 아닌 참조하는 메모리 주소에 저장된 값들을 비교한다고 보면되겠다.

# 메모리 주소를 비교하고 싶으면 is 연산자를 사용하면 된다.
# 아래와 같이 하면 friend_foods 는 my_foods와 같은 메모리 주소를 참고한다.
# 따라서 둘중 하나에 요소를 추가하면 둘 다 추가된 것 처럼 보인다.
my_foods= ['pizza','pasta','chicken']
friend_foods = my_foods

my_foods.append("water")
print(my_foods)
# ['pizza', 'pasta', 'chicken', 'water']

print(friend_foods)
# ['pizza', 'pasta', 'chicken', 'water']
