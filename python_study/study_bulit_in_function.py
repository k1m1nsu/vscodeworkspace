'''
사용할 가능성이 높은, 사용하면 유용할, 사용했던 내장함수들을 정리해보자.
'''
# divmod
divmod(7,3) # 몫과 나머지를 튜플로 리턴한다. 페이징을 할 때 유용하게 쓰일 수 있을 것같다.

# enumerate
for i, name in enumerate([2,4,6,8,10]): # iterable한 객체를 받고 인덱스 값을 포함하는 enumerate객체를 리턴한다. 인덱스 값이 필요하다면 유용하다.
    print(i,name)

#filter filter(function, iterable) iterable객체에서 요소를 하나씩 가져와 function이 True라고 판단하는 것들을 filter객체로 리턴한다.
num_array = [-3,-2,-1,0,1,2,3]

filter_positive = lambda x : x > 0;

num_array = list(filter(filter_positive,num_array)) # [1, 2, 3]

# isinstance isinstance(object, class) object가 class의 instance인지 True False를 리턴한다.
class MyClass: pass
a = MyClass()
isinstance(a,MyClass) # True

#len  len(object)
# 다른 파이썬 내장함수들이 그렇듯 클래스에서 스페셜 메소드를 구현하면 어떤 객체든 집어넣을 수 있다.
# 더 다양하고 자세하게는 스페셜 메소드를 공부하면서 적겠다.
class MyClass2:
    def __len__(self):
        return 10
    def __str__(self):
        return 'My name is Barney Stinson'

b = MyClass2()
len(b) # 10
print(b) # 'My name is Barney Stinson'

# list  list(iterable)  iterable한 객체를 리스트로 만들어 리턴한다.
# tuple tuple (iterable)
list('Barney') # ['B', 'a', 'r', 'n', 'e', 'y']
tuple('Barney') # ('B', 'a', 'r', 'n', 'e', 'y')

# map map(function, iterable) iterable객체에서 요소를 하나씩 가져와 function을 적용시켜 map 객체로 리턴한다.
double_func = lambda x : x*2
num_list = [1,2,3,4,5]
list(map(double_func,num_list)) # [2, 4, 6, 8, 10]

# max min sum (iterable)
max([1,2,3]) # 3
min([1,2,3]) # 1
sum([1,2,3]) # 6

# round  round(number, [the number of right side of decimal point ])
round(4.6) # 5
round(4.2) # 4
round(5.678123, 2) # 5.68

# zip zip(*iterable) 
for i,k in zip(range(10),range(10)):
    print(i,k)


