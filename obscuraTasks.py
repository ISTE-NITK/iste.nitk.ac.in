import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
from App.models import *
from django.core.files.images import ImageFile
import xlrd,xlsxwriter

# Enter roll numbers or names(case should match) of the people who have completed task 4
task4 = ['181CO109']

def excel_read(file,sheet_name='Sheet1'):  
        book = xlrd.open_workbook(file)
        sheet = book.sheet_by_name(sheet_name)
        data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)] for r in range(sheet.nrows)]
        return data

def excel_write(dataset,file,worksheet_name="ISTE Square 1 leaderboard"):
        workbook = xlsxwriter.Workbook(file)
        worksheet = workbook.add_worksheet(worksheet_name)
        n=1
        for data in dataset:
            c='A'
            for x in data:
                cell=c+str(n)
                worksheet.write(cell, x)
                c=chr(ord(c)+1)
            n+=1
        workbook.close()

'''1. Get the highest score in any of the games
2. Answer all the questions correctly
3. Become a Flappy Champion in the Flappy Bird game
4. Get the "Slow Paddle" power up in the Brickbreaker game
5. Get a score of at least 90 in the Typing Game'''

data = []
objUsers = User.objects.all()
for i in objUsers:
	data.append([i.name, i.rollNo, i.score])

# for first one 
flag = [False for _ in objUsers]
def funHighScore(gameId):
	objGame = Game.objects.filter(gameId = gameId).latest('score')
	max_score = objGame.score
	index = 0
	for i in objUsers:
		userGameObj = Game.objects.get(name = i, gameId = gameId)
		if userGameObj.score == max_score:
			flag[index] = True
		index += 1

funHighScore(1)
funHighScore(2)
funHighScore(3)
funHighScore(4)
funHighScore(5)

index = 0
while index < len(flag):
	if flag[index]:
		data[index].append('Y')
	else:
		data[index].append('')
	index += 1


#for the 2nd one
index = 0
for i in objUsers:
	flag = True
	objNode = Node.objects.filter(name = i)
	for j in objNode:
		if j.score == 0:
			flag = False
			break
	if flag:
		message = 'Y'
	else:
		message = ''
	data[index].append(message)
	index += 1


#for 3rd one
flag = [False for _ in objUsers]
funHighScore(2)
index = 0
while index < len(flag):
	if flag[index]:
		data[index].append('Y')
	else:
		data[index].append('')
	index += 1

#for 4th one 
index = 0
for i in objUsers:
	if i.name in task4 or i.rollNo in task4:
		data[index].append('Y')
	else:
		data[index].append('')
	index += 1

#for 5th one 
index = 0
for i in objUsers:
	objGame = Game.objects.get(name = i, gameId = 5)
	if objGame.score >= 90:
		data[index].append('Y')
	else:
		data[index].append('')
	index += 1

#first, second, third position
userFirst = User.objects.latest('score')
firstScore = userFirst.score
secondScore, thirdScore = -1, -2
index = 0
for i in objUsers:
	if i.score == firstScore:
		data[index].append('Y')
	else:
		data[index].append('')
		if i.score > secondScore:
			thirdScore = secondScore
			secondScore = i.score
		elif i.score > thirdScore:
			thirdScore = i.score
	index += 1

index = 0
for i in objUsers:
	if i.score == secondScore:
		data[index] += ['Y', '']
	elif i.score == thirdScore:
		data[index] += ['', 'Y']
	else:
		data[index] += ['', '']
	index += 1

data = [['Name', 'Roll Number', 'Total Score', 'Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'First', 'Second', 'Third']] + data
print(data)
print(flag)
excel_write(data, 'Obscura-Results.xlsx')