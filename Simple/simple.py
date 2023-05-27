#!/usr/bin/env python

#
#  a simple PUML implementation
#

import paho.mqtt.client as mqtt
import paho.mqtt.publish as publish
import sys, time
import simplejson as json

mqtthost = "127.0.0.1"
		
# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print(time.ctime()+" Connected with result code "+str(rc))
    sys.stdout.flush()
    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
#    client.subscribe([("$access/#", 0),("$tell/#",0),("$ask/#",0)])
    client.subscribe([("eBook",0)])

# callback if disconnect occurs
def on_disconnect(client, userdata, rc):
	if rc != 0:
		print(time.ctime()+" Unexpected disconnection.")
		print("userdata: ", userdata)

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
	print("== simple puml on_message:"+msg.topic+" "+str(msg.payload))
	compobj = json.loads(msg.payload)
	print("JSON: "+str(compobj))
	sys.stdout.flush()


client = mqtt.Client()
client.on_connect = on_connect
client.on_disconnect = on_disconnect
client.on_message = on_message
client.connect(mqtthost, 1883, 60)
print("simple puml eBook starting.....")
sys.stdout.flush()
client.loop_forever()
