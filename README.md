# [conshare Beta version development]
conshare Better, Faster, Simple and Reliable 
conshare is a social media app that enables users to share and refer connections to each other or 
even job opportunities.
# features done;
Authentication, 
Feed; users can perform all crud ops on the app. 
Userprofile 
# todo 
feeds like 
referrals

# Installation

clone the repo 
``` https://github.com/consharellc/conshareBeta.git ```

Make sure you have docker installed in your machine 

run the following commands
```docker-compose up ```
```docker build -t consharebeta . ```
```docker run -p 3000:3000 -d consharebeta ```

open the app at http://localhost:3000 -

### Note 
The application best works with node v14
if you do have it you can run the following npm commands 

``` npm install ```
``` npm start ```

else its best to work with docker. 

### contributions
If you want to contribute feel free to to create a PR.
create a fork to your own account first, contribute and create a PR merging back to consharebeta master


