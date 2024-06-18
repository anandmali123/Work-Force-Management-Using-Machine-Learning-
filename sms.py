from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'ACcc4ab82a3d6b819fd4f27ad75385e78a'
auth_token = 'be38a85ea75f9665bddb86825306f9c9'
client = Client(account_sid, auth_token)

def sendSMS(sender,recipient,body):
    message = client.messages \
                    .create(
                        body=body,
                        from_=sender,
                        to=recipient
                    )

    print(message.sid)