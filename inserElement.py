def insertelement(li,indx,va):
    for i in range(len(li)-1,indx,-1):
        li[i]=li[i-1]
        
    li[indx]=value
    
li = [1,2,3,45,77,77,88]
insertelement(li,2,100)
print(li)