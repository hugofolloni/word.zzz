import csv, json

def convertFiles(csvFilePath, jsonFilePath):
    data = {}
    with open (csvFilePath, encoding='utf8') as csvFile:
        csvReader = csv.DictReader(csvFile)
        for rows in csvReader:
            data[] = rows

    with open (jsonFilePath, 'w', encoding='utf8') as jsonFile:
        jsonFile.write(json.dumps(data, indent=4))


convertFiles('React\word.zzz\src\scripts\words6.csv', 'React\word.zzz\src\scripts\words6s.json')
convertFiles('React\word.zzz\src\scripts\words7.csv', 'React\word.zzz\src\scripts\words7s.json')