import smtplib,ssl
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.utils import formatdate
from email import encoders


file = 'Obscura-Results.xlsx'
username='istenitkchapter@gmail.com'
password='#includeistenitk.h'
send_from = username
send_to = 'amodhshenoy@gmail.com'

msg = MIMEMultipart()
msg['From'] = send_from
msg['To'] = send_to
msg['Subject'] = 'Obscura'
server = smtplib.SMTP('smtp.gmail.com',587)
fp = open(file, 'rb')
part = MIMEBase('application','vnd.ms-excel')
part.set_payload(fp.read())
fp.close()
encoders.encode_base64(part)
part.add_header('Content-Disposition', 'attachment', filename=file)
msg.attach(part)
smtp = smtplib.SMTP('smtp.gmail.com',587)
smtp.ehlo()
smtp.starttls()
smtp.login(username,password)
smtp.sendmail(send_from, send_to, msg.as_string())
smtp.quit()
print("Mail sent successfully")