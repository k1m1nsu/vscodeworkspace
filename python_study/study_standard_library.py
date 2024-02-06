'''
파이썬 표준 라이브러리를 대략적으로 살펴본다.

1. datetime
2. time
3. math
4. random
5. itertools 조합 순열 등을 다룸 나중에 필요할 때 보자

'''
import datetime

day = datetime.date(2024,2,6)
day.weekday() # 1 화요일 

day = datetime.datetime.now()
day.year # 2024
day.month # 2
day.day # 6
day.hour # 13
day.minute # 22
day.second # 45
day.weekday() # 1 화요일 

import time

time.time() # 1707193712.5120149
time.localtime(time.time()) #time.struct_time(tm_year=2024, tm_mon=2, tm_mday=6, tm_hour=13, tm_min=30, tm_sec=8, tm_wday=1, tm_yday=37, tm_isdst=0)

time.sleep(1) # 1초간 슬립


import math

math.gcd(60,80,100) # 최대공약수 greatest common divisor 20
math.lcm(15,25) # 최소공배수 least common multiple 75

import random

random.random() # 0에서 1 사이의 실수 중 랜덤한 값을 리턴함. 0.28200528669973257
random.randint(1,10) # 입력한 값을 포함하여 사잇값의 정수를 리턴함
data = [1,2,3,4,5]
random.choice(data)
random.choices(data,k=2)# 2개 뽑아서 리스트로 돌려줌 가중치를 정할 수도있다. 중복을 허용함
random.sample(data,k=2) # 2개를 뽑아서 리스트로 돌려줌 중복을 허용하지않음

