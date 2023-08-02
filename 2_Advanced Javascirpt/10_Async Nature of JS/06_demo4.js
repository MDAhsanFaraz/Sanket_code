
for( var i=0;i<4;i++)
{
          console.log("Native code",i);
          setTimeout(function ()
          {
                    console.log("HI",i);
          },i*1000);//remmebres the latest value due to clousers as var is not blocked scoped 
}