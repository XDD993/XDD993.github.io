function startTime()

            {

                var today=new Date();//定义日期对象

                var yyyy = today.getFullYear();

                var MM = today.getMonth()+1;

                var dd = today.getDate();

                var hh=today.getHours();

                var mm=today.getMinutes();

                var ss=today.getSeconds();

                var vv=today.getMilliseconds()

                MM=checkTime(MM);

                dd=checkTime(dd);

                mm=checkTime(mm);

                ss=checkTime(ss);
                document.getElementById('nowDateTime').innerHTML=MM+"-"+dd
                document.getElementById('nowDateTimeSpan').innerHTML=hh+":"+mm+":"+ss+"."+vv;

                setTimeout('startTime()',3);

            }



            function checkTime(i)

            {

                if (i<10){

                    i="0" + i;

                }

                  return i;

            }
		var name = prompt("请输入你的名字","名字");
		var number = prompt("请输入你的学号","学号");
		if(name!='aaaa'){
			text=document.getElementById("demo");
			var a="进校："+name+'<br>-'+number+"，<br>白名单验证通过"
            text.innerHTML=a;
		}