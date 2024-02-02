'''
함수를 정의할 때는 def 예약어를 사용한다.

def function_name ([parameter1], [parameter2=defalut value], [*args], [**kwargs]):
    something

기본적으로는 함수를 호출 할 때 함수의 파라미터의 순서대로 입력해야한다.
그렇게 하지 않으려면 key word를 통해 전달할 수 있다.
function_name(parmeter2 = 'World !', parameter1 = 'Hello')


'''
# *args의 사용
# 받아야 할 파라미터의 개수를 확정할 수 없다면 *args 를 사용해 전달되는 argument를 모두 '튜플' 로 전달 받을 수 있다.
def functionTest(*args):
    print(args)
    print(type(args))

functionTest(1, '2', [3, 4, 5], (6, 7))
# (1, '2', [3, 4, 5], (6, 7))
# <class 'tuple'>

# **kwargs의 사용 key word arguments 
# 받아야 할 파라미터의 개수를 확정할 수 없고 전달하는 argument의 이름을 사용하고 싶다면 **kwargs를 이용해 '딕셔너리'로 전달 받을 수 있다.
def functionTest2(**kwargs):
    print(kwargs)
    print(type(kwargs))
    return kwargs['firstname'] + ' ' + kwargs['lastname']

fullname = functionTest2(firstname="Barney", lastname='Stinson') # 'Barney Stinson'
# {'firstname': 'Barney', 'lastname': 'Stinson'}
# <class 'dict'>


def functionTest3(firstname,lastname,*args,**kwargs):
    print(firstname)
    print(lastname)
    print(args)
    print(kwargs)

functionTest3('Barney', 'Stinson', 1, 2, 3, 4, 5, greeting='Hi!')
# Barney
# Stinson
# (1, 2, 3, 4, 5)
# {'greeting': 'Hi!'}

# 함수안에 또 다른 함수를 넣을 수도 있다.

def generate_power(base_number):

    def nth_power(power):
        return base_number ** power
    
    return nth_power

calculate_power_of_two = generate_power(2)

print(calculate_power_of_two(7)) # 128
'''
이러한 것이 가능한 것은 파이썬에서의 함수가 일급 객체로 취급되기 때문이다.
일급 객체는 다음과 같은 세 가지 조건을 만족하는 개체를 가르킨다.
1. 변수에 할당할 수 있다. calculate_power_of_two = generate_power(2)
2. 함수의 매개변수로 전달할 수 있다. print(calculate_power_of_two(7))
3. 함수의 반환 값으로 사용할 수 있다. return nth_power
'''



'''
함수를 생성하는 또 다른 예약어가 있다.
lambda 
람다 함수의 구조는 다음과 같다.
fucntion_name = lambda [argument1], [argument2] : Expession
'''
fullname_maker = lambda firstname, lastname : firstname + ' ' + lastname

fullname = fullname_maker('Barney', 'Stinson') # 'Barney Stinson'

