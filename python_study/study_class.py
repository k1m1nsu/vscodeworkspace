'''
파이썬에서 클래스는 다중상속이 가능하고, 기본적으로는 메소드 오버로딩이 되지않는다.
메소드 오버라이팅은 가능.

'''
import datetime


class Clock:
    class_variable = 0; # class variable 은 어떤 인스턴스든 공유하는 값이다.
    def __init__(self):
        object_variable = 0; # object_variable은 해당 객체만 가지는 값이다.
        print('clock init method run')

    def something_you_have_to_override(self):
        raise NotImplementedError # 반드시 오버라이딩하도록 유도하자!

    def get_time_now(self):
        return datetime.datetime.now()

class Calculator:
    def __init__(self):
        print('cal init method run')
    # def add(self, parameter1):
    #     return parameter1 
    # def add(self,parameter1,parameter2): 파이썬에서는 받는 인자의 수가 다르다 해서 오버로딩이 되지않는다.
    #     return parameter1+parameter2     multipledispatch 라이브러리를 이용하면 가능하게 할 수 있다. https://velog.io/@uoayop/3-5.-Method-Overloading
    def add(self,*args):
        return sum(args)

class SmartPhone(Clock,Calculator):
    def __init__(self,owner):
        # super().init() 이렇게 부모클래스의 생성자에 접근하면 명시된 두개의 클래스중 앞에있는 것에만 접근한다.
        Clock.__init__(self)
        Calculator.__init__(self)
        self.owner=owner
        print('phone init method run')
    def show_owner(self):
        print(self.owner)

my_phone = SmartPhone('Barney Stinson')

sum_1to10 = my_phone.add(1,2,3,4,5,6,7,8,9,10)
time_now = my_phone.get_time_now()
my_phone.show_owner()

print(sum_1to10)
print(time_now)

