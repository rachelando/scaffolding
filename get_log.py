import sys
from datetime import datetime
from bs4 import BeautifulSoup
import json

CSS_CLASS = "log"

files = ['build/html/3-target-size.html'] # TODO

new_file = f"Log {datetime.now().strftime('%y%m%d %H%M%S')}"
if len(sys.argv) > 1:
    new_file += f' {sys.argv[1]}'
print(new_file)

for filename in files:
    with open(filename, "r", encoding="utf-8") as html_file:
        html_file_content = html_file.read()
    soup = BeautifulSoup(html_file_content, "html.parser")
    tags = soup.find_all("script", type="application/json", class_=CSS_CLASS)
    json_data = [] # complete json data
    print(tags)
    # print(type(tags[0]))
    for tag in tags:
        print(tag.string)
        print(json.loads(tag.string))

