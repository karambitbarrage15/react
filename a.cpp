#include<iostream>
#include<vector>
#include<string>
using namespace std;
string numTowords(int nums)
{
      vector<string> below20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten","Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen","Eighteen", "Nineteen"};

    vector<string> tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    string ans="";
    int m1=nums/100;
    if(m1==0)
    {
       int m=nums%100;
       if(m<20){
        ans=ans+below20[m];
       }else if(m>20)
       {
        ans=ans+tens[m%10]+below20[m];
       }
    }else if(m1>0)
    {
        int a=nums%100;
    int b=nums%10;
    if(a<20){
        ans=ans+below20[m1]+"hundred"+below20[b];
    }else if(a>20)
    {
       ans=ans+below20[m1]+"hundred"+tens[a]+below20[b];
    }

    }
return ans;
}
int main()
{int a=859;
cout<<numTowords(a);
    return 0;
}