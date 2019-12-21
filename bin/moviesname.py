import csv
import requests
import requests.packages.urllib3
from bs4 import BeautifulSoup

requests.packages.urllib3.disable_warnings()

# 開啟 CSV 檔案
with open('movies.csv', encoding='utf_8_sig', newline='') as csvfile:

  # 讀取 CSV 檔案內容
  rows = csv.reader(csvfile)

  # 開啟輸出的 CSV 檔案
  with open('movies2019.csv', 'w',encoding='utf_8_sig', newline='') as csvfileOutput:
    # 建立 CSV 檔寫入器
    writer = csv.writer(csvfileOutput)

    # 以迴圈輸出每一列
    for row in rows:
        name = row[0]
        target_url = 'https://zh.wikipedia.org/wiki/' + name
        rs = requests.session()
        res = rs.get(target_url, verify=False)
        res.encoding = 'Big5'
        soup = BeautifulSoup(res.text, 'html.parser')
        s = soup.select('#mw-content-text .mw-parser-output p span i')
        
        if not s: 
            pass
        else:
            en_name = s[0].text
            print(name, en_name)
            # 寫入一列資料
            writer.writerow([name, en_name])

