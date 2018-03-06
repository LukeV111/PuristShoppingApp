#!/usr/bin/python2.7

import datetime
from firebase import firebase
import json
import smtplib

firebase = firebase.FirebaseApplication('https://purist-coffee-shopping-app.firebaseio.com/', None)



get_orders = (firebase.get('/userProfile/icfbF0f63QV8bjJUYKwnOwYPCMf2/placedOrders/', None,)) #Placed Orders List

json.dumps(get_orders) #Turns it into JSON

#for orders in get_orders():
#	orderList.append(orders) #Appends all the ids to a list.

print get_orders #Dictionary of all the data.

# list_position = 0

# for userkey in userkeys: #Filter out the companyName and myDate from the gets_ids dictoonary, and then replaces myData with the format of the date that we need it in.

# 	companyName = get_ids[userkeys[list_position]]["companyName"] #Ok so you're filtering our a dictionary to look for a value.
# 	myDate = get_ids[userkeys[list_position]]["myDate"]
# 	myDate = datetime.datetime.strptime(myDate, '%Y-%m-%d').date()

# 	list_position = list_position + 1

# 	if myDate == order_date: #If it is on 30 days.
# 		it_is_30_days.append(companyName)
# 		print (companyName)

# 	elif myDate < order_date: #If the date of the current order is less than the "order_date" specified.
# 		older_than_30_days.append(companyName)

# 	elif myDate > order_date: 
# 		newer_than_30_days.append(companyName)

# 	elif list_position == len(userkeys) - 1: #Just makes sure there is no error at the end of the list.
# 		break

# #Compare new and older and remove from older if in newer.

# past_culprits = list(set(older_than_30_days) - set(newer_than_30_days))

# #Compare newer and today and remove from today if in newer.

# todays_culprits = list(set(it_is_30_days) - set(newer_than_30_days))


# print "Today's Culprits"
# print todays_culprits
# print "Past Culprits"
# print past_culprits

# print "Now. Looking for customer names"

# #Second function of the script below.

# customerkeys = []  # Starts a new list just for the keys
# UntrackedCustomers = [] #List of tracked customers

# get_customer_profile_ids = (firebase.get('/users/Dviipvi2IVXvHHIW5hHfU5H8kiw1/Customers/', None,)) #Gets customers and their information.

# json.dumps(get_customer_profile_ids)  # Turns it into JSON so we can use it.

# for cust_ids in get_customer_profile_ids.keys():
# 	customerkeys.append(cust_ids)  # Appends all the keys to a list.

# cust_list_position = 0

# for customerkey in customerkeys:

# 	stored_companyName = get_customer_profile_ids[customerkeys[cust_list_position]]["companyName"]
# 	#print "Did we get here?"
# 	#I think the problem is that it tries to find customerTracking that is associated with a customer that is not on our list.
# 	customerTracking = get_customer_profile_ids[customerkeys[cust_list_position]]["customerTracking"]

# 	cust_list_position = cust_list_position + 1

#         if customerTracking == "No":
# 		    UntrackedCustomers.append(stored_companyName)
# 		    print (stored_companyName)

# print UntrackedCustomers

# tracked_past_culprits = list(set(past_culprits) - set(UntrackedCustomers))

# print tracked_past_culprits

# tracked_todays_culprits = list(set(todays_culprits) - set(UntrackedCustomers))

# print tracked_todays_culprits

# print "DONE DONE DONE DONE DONE DONE DONE"

#Ok, so now we have all the customers with Yes by them.
#Now we need to go back and see if they are part of the culrpits. Today and past.


#Then rather send it with sendgrid.

def send_mail():


	FROM_ADDRESS = 'support@spanorders.com'
	PASSWORD = '#SPan03120312'
	TO_ADDRESS = 'hello@puristcoffee.com'

	message = """From: SpAn Orders <support@spanorders.com>
	To: Purist Coffee <hello@puristcoffee.com>
	MIME-Version: 1.0
	Content-type: text/html
	Subject: SMTP HTML e-mail test/n

	Dear Fruit Lukes & Ash Flash,

	The following customers ordered 30 days ago but haven't ordered again:

	%s

	The following people have taken more than 30 days since their last order:

	%s

	Let's go. :)

	""" % (str(tracked_todays_culprits), str(tracked_past_culprits))

	try:
		smtpObj = smtplib.SMTP('smtp.spanorders.com')
		smtpObj.sendmail(FROM_ADDRESS, TO_ADDRESS, message)
		print "Successfully sent email"
	except smtplib.SMTPException:
		print "Error: unable to send email"

#send_mail()

#Ok, we have won.
