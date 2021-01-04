import importlib,os
import django
os.environ['DJANGO_SETTINGS_MODULE'] = 'website.settings'
django.setup()
import xlrd,xlsxwriter
from leaderboard.models import *

def excel_read(file,sheet_name='Sheet1'):  
        book = xlrd.open_workbook(file)
        sheet = book.sheet_by_name(sheet_name)
        data = [[sheet.cell_value(r, c) for c in range(sheet.ncols)] for r in range(sheet.nrows)]
        return data

def excel_write(dataset,file,worksheet_name="Usernames"):
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

event = input("Enter event:")
n = 5 if event!='Ragnarok' else 4
data = excel_read('SQ1 Leaderboard-Points.xlsx',event)[1:]
for row in data:
    # print(row)
    name = row[0]
    roll_no = row[1].upper()
    score = 0
    for i in row[2:2+n]:
        if i.upper()=='Y':
            score +=10
    if row[2+n]=='Y':
        score += 100
    elif row[3+n]=='Y':
        score+=80
    elif row[4+n]=='Y':
        score+=50
    
    obj = Participant.objects.filter(roll_no=roll_no)
    if len(obj)==0:
        obj = Participant.objects.create(name=name, roll_no=roll_no, points=score)
        obj.save()
    else:
        obj = obj[0]
        obj.points += score
        obj.save()
print("DONE")
        
