import json
import urllib.parse
query = "INSERT INTO wombats_db.bulletins (bulletin_id, bulletin_title, bulletin_text, bulletin_date) VALUES"
insert = "\n({_id}, '{title}', '{text}', '{date}')"

# migruje z eksportu tabeli "news" jako obiekt json


def escape_chars(string_object: str):
    return string_object.replace("'", "''")

with open("export.json", "r") as file:
    json_file = file.read()

x = json.loads(json_file)

for index in range(len(x)):
    entry_id = index + 1
    entry_date = x[index]["data"]
    title_encoded = x[index]["tytul"]
    text_encoded = x[index]["tresc"]


    title_decoded = urllib.parse.unquote_plus(title_encoded)
    text_decoded = urllib.parse.unquote_plus(text_encoded)

    title_decoded = escape_chars(title_decoded)
    text_decoded = escape_chars(text_decoded)

    query = query + insert.format(_id=entry_id, title=title_decoded, text=text_decoded, date=entry_date)
    if entry_id != len(x):
        query = query + ","
    else:
        query = query + ";"

with open("bulletins.sql", "w") as file:
    file.write(query)
