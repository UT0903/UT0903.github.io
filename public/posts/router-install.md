title: 台大宿舍網路路由器零基礎安裝詳解（全圖解）
date: 2020-09-22
img: router-install/main.jpeg
description: 這篇文章手把手教你怎麼在宿舍裝上自己的無線Wifi
tags: 台大, 網管
+-+-+-+-

## 前言

不想每次回宿舍上網都要插插拔拔網路線怎麼辦？手機沒有吃到飽，在宿舍也想要跟電腦一起用宿網網路怎麼辦？這篇文章可能可以幫助到你！

## ※所需工具

一台路由器（本篇使用tp-link-WR840N a.k.a網路上最便宜的路由器做示範）、一條網路線（通常隨著購買路由器會附送一條）  

## 1. 進入台大宿網管理系統平台 / 在台大宿網管理系統平台註冊

### 1-0. 確認電腦用正確的方式連上台大校園網路

* 方法1: 直接用網路線連至宿舍網路孔(記得要聽到「喀」一聲才有插緊)
Mac或沒有網路孔的電腦可以選擇用「網路孔轉USB的轉接頭」，或是使用其他方法
* 方法2: 將路由器連至宿舍網路孔，再將電腦用無線的方式連線到路由器  
透過路由器連到網路孔一樣是連到台大內網  
* 方法3: 將電腦連線至台大校園網路(NTU, ntupeap等等)
* 方法4: 使用台大VPN連線  
[台大VPN安裝及使用說明](https://ccnet.ntu.edu.tw/vpn/)  

### 1-1. 在網址列輸入140.112.2.197

### 1-2. 點選「宿舍網路註冊系統」

![](https://i.imgur.com/qYmvkmd.jpg)

### 1-3. 確認有出現紅色區域且網段欄為目前所住的宿舍，上方基本資料的部分沒有亂碼，新生或換宿生記得要在此頁面註冊或更新資料

![](https://i.imgur.com/7R6zdC1.png)

## 2. 路由器設定

(此部份依各家廠牌不同，可能需要輸入不同網址與輸入不同的預設帳密，請參考該廠牌說明書)

### 2-1. 將網路線連結於路由器上的WAN孔與宿舍網路孔之間，並將路由器接上電源

### 2-2. 用電腦連wifi到路由器，在電腦網址欄輸入「192.168.0.1」進入路由器管理頁面，輸入帳號和密碼(預設為帳號:admin 密碼:admin)

### 2-3. 點擊網路設定>網際網路(WAN)

### 2-4. 修改紅框3中內容

#### 2-4-1. 連線類型：改成固定IP

#### 2-4-2. IP位址：改成宿網註冊平台中的註冊IP(不是登入IP，不是登入IP，不是登入IP，很重要所以說三次)

#### 2-4-3. 子網路遮罩：輸入「255.255.255.0」。如果他要你輸入遮罩長度，請輸入「24」

#### 2-4-4. 預設閘道：IP位址的最後一碼改成254。如140.112.245.100的閘道就是140.112.245.254

#### 2-4-5. 主要DNS：140.112.254.4

#### 2-4-6. 次要DNS：168.95.1.1或是8.8.8.8

#### 2-4-7. 修改完成後請再三確認沒有打錯，記得按儲存

![](https://i.imgur.com/K7105uB.png)

## 3. 修改WAN MAC位址或修改註冊MAC位址

* 方法1: 修改路由器的MAC
* 方法2: 修改宿網管理系統的註冊MAC(適用於有些路由器不能改MAC a.k.a.爛路由器)  
這邊有兩種方法，兩種挑一種來做就好，基本上就是把兩個東西的MAC位址改成一樣的(如圖，把1跟2的MAC位址改成一樣的)  

![](https://i.imgur.com/KULRrzl.png)  
![](https://i.imgur.com/XPooX1V.png)

### 3-1. 另外，如果找不到路由器初始的MAC位址，路由器本體的下面通常會寫這台機器的詳細資訊

![](https://i.imgur.com/XNkbCCG.png)

## 4. 最後，把路由器接上網路線到宿舍網路孔

**注意，要接在有寫WAN的網路孔上，不要插錯了**  
![](https://i.imgur.com/7x8qgxF.jpg)

## 5. 大功告成，可以用電腦或手機試試看能不能連上網路

有時候需要等待5-10分鐘的學校資料庫更新  

還是不行？了解觀念後才會更清楚自己在幹嘛!  
[台大學生都應該了解的網路基礎知識](post/web-knowledge)
