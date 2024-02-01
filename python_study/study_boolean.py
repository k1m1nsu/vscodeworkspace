# 파이썬에는 다른 프로그래밍 언어와 마찬가지로 bool 자료형에는 참(True)과 거짓(False)가 있다.
# 비어있는 문자열 같은 경우 False로 평가하는 언어들이 있었다. 파이썬에서는 어떨까

# bool() 함수를 사용하면 True False 를 판단할 수 있다

num1 = 0 # False
num2 = 1 # True

str1 = '' # False
str2 = 'None'

# 다른 언어에서 찾아볼 수 있는 null은 Python 에서 None 이다
x = None # False

s1 = set() # False
s2 = {1,2} # True

ls1 = [] # False
ls2 = [0] # True

dic1 = {} # False
dic2 = {1:1} # True