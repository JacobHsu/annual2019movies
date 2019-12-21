import csv
import requests
from bs4 import BeautifulSoup

# 開啟輸出的 CSV 檔案
with open('movies.csv', 'w',encoding='utf_8_sig', newline='') as csvfile:
  # 建立 CSV 檔寫入器
  writer = csv.writer(csvfile)

  target_url = 'http://www.truemovie.com/tairelease2019.htm'
  rs = requests.session()
  res = rs.get(target_url, verify=False)
  res.encoding = 'Big5'
  soup = BeautifulSoup(res.text, 'html.parser')
  content = ""

  for index, data in enumerate(soup.select('table td a')):
      movie = data.text.replace('\n', '').replace('\u3000', '').replace(" ", "").replace('\t', '').replace('\r', '').replace('\"', ''); 
      print(movie)

      # 寫入一列資料
      writer.writerow([movie])
