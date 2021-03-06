db.getCollection('strassenbeleuchtung').aggregate([
{
 $match: {
   geometry: {
      $geoWithin: {
         $geometry: {
                "type": "Polygon",
                "coordinates": [
               [
                  [
                     6.63085133613205,
                     51.46428917328948
                  ],
                  [
                     6.63097181917582,
                     51.46430770454445
                  ],
                  [
                     6.631003242217104,
                     51.4643125954658
                  ],
                  [
                     6.631059454970663,
                     51.464321361431594
                  ],
                  [
                     6.631236616406671,
                     51.464349006339106
                  ],
                  [
                     6.631406291426946,
                     51.464375469166974
                  ],
                  [
                     6.631625041068204,
                     51.464409585493506
                  ],
                  [
                     6.631701168875124,
                     51.464421461485955
                  ],
                  [
                     6.63205981716198,
                     51.464477400081726
                  ],
                  [
                     6.632094456332871,
                     51.464482803653745
                  ],
                  [
                     6.632239127612682,
                     51.464505364509435
                  ],
                  [
                     6.632292716065119,
                     51.464513721628826
                  ],
                  [
                     6.632608305039979,
                     51.46456388693314
                  ],
                  [
                     6.633073626447721,
                     51.46463782894742
                  ],
                  [
                     6.633124793753409,
                     51.464645956714065
                  ],
                  [
                     6.633437084193266,
                     51.464697139502995
                  ],
                  [
                     6.633514849321874,
                     51.46470979751092
                  ],
                  [
                     6.633675411646641,
                     51.464240050514505
                  ],
                  [
                     6.634129439575134,
                     51.464303711526306
                  ],
                  [
                     6.634542622060381,
                     51.46436165258452
                  ],
                  [
                     6.634963807744819,
                     51.464420708951224
                  ],
                  [
                     6.635187928131526,
                     51.46445232974119
                  ],
                  [
                     6.635133978682517,
                     51.464714832946385
                  ],
                  [
                     6.635092832823776,
                     51.46491500301323
                  ],
                  [
                     6.635141519905204,
                     51.464976510872056
                  ],
                  [
                     6.635174941119363,
                     51.465012267435576
                  ],
                  [
                     6.636526473433031,
                     51.465076035540676
                  ],
                  [
                     6.637472678489941,
                     51.462407439211916
                  ],
                  [
                     6.638292148814099,
                     51.459984863185625
                  ],
                  [
                     6.639238058235622,
                     51.45735435978578
                  ],
                  [
                     6.639709512768636,
                     51.456047301316744
                  ],
                  [
                     6.640289101434616,
                     51.45442981067408
                  ],
                  [
                     6.640972273060328,
                     51.452531846870954
                  ],
                  [
                     6.641159414658238,
                     51.45201635810567
                  ],
                  [
                     6.641540892501713,
                     51.45095652660614
                  ],
                  [
                     6.642001835464825,
                     51.45001426699945
                  ],
                  [
                     6.642333694896489,
                     51.449554360685084
                  ],
                  [
                     6.643064117414094,
                     51.44854218946578
                  ],
                  [
                     6.643207436714681,
                     51.44837975322095
                  ],
                  [
                     6.643270005354504,
                     51.44830882945411
                  ],
                  [
                     6.643950219732599,
                     51.44753761460354
                  ],
                  [
                     6.643557465473321,
                     51.44585207119966
                  ],
                  [
                     6.643431800354134,
                     51.44587192378325
                  ],
                  [
                     6.642583530782098,
                     51.4460059166008
                  ],
                  [
                     6.640955608541336,
                     51.446303984475996
                  ],
                  [
                     6.639232376381124,
                     51.446676070640564
                  ],
                  [
                     6.639163070015969,
                     51.44638619629081
                  ],
                  [
                     6.638971092460208,
                     51.445976034668064
                  ],
                  [
                     6.638952379933147,
                     51.445936057583374
                  ],
                  [
                     6.638761380721524,
                     51.44557029140073
                  ],
                  [
                     6.638446241992145,
                     51.44530255326124
                  ],
                  [
                     6.638347717282448,
                     51.44521884091177
                  ],
                  [
                     6.637583423335218,
                     51.444844911001695
                  ],
                  [
                     6.637052807927888,
                     51.444548428964175
                  ],
                  [
                     6.636951447109587,
                     51.44462161541628
                  ],
                  [
                     6.635542117209974,
                     51.44560134283204
                  ],
                  [
                     6.634877167649512,
                     51.446063557523765
                  ],
                  [
                     6.633511746299417,
                     51.44702437740146
                  ],
                  [
                     6.633294486833663,
                     51.44717724671358
                  ],
                  [
                     6.631973101029046,
                     51.4481070267405
                  ],
                  [
                     6.630925185227853,
                     51.4475056279926
                  ],
                  [
                     6.630607628115508,
                     51.44732337349612
                  ],
                  [
                     6.630005788909473,
                     51.44697796362912
                  ],
                  [
                     6.628188276796131,
                     51.445934453127435
                  ],
                  [
                     6.628168084097543,
                     51.44590952012291
                  ],
                  [
                     6.62804015392222,
                     51.44575148023276
                  ],
                  [
                     6.627060644635711,
                     51.44496367536274
                  ],
                  [
                     6.626947178084557,
                     51.44492333149345
                  ],
                  [
                     6.626019626534652,
                     51.44445544156775
                  ],
                  [
                     6.625911591219732,
                     51.444377838468704
                  ],
                  [
                     6.625430289560113,
                     51.443948524678305
                  ],
                  [
                     6.625276874978352,
                     51.443807843480975
                  ],
                  [
                     6.62475623877325,
                     51.44333035443133
                  ],
                  [
                     6.623880210794403,
                     51.44271698068349
                  ],
                  [
                     6.623721348929531,
                     51.442620778111724
                  ],
                  [
                     6.623159788497207,
                     51.44228342321983
                  ],
                  [
                     6.622649225846234,
                     51.44190348377732
                  ],
                  [
                     6.622339717419338,
                     51.441609274097814
                  ],
                  [
                     6.622079202433034,
                     51.441241736735215
                  ],
                  [
                     6.621930904767533,
                     51.4409571263548
                  ],
                  [
                     6.621782324021942,
                     51.44065163643667
                  ],
                  [
                     6.62169474100576,
                     51.44054834849185
                  ],
                  [
                     6.621230829891175,
                     51.44000119239302
                  ],
                  [
                     6.619948709756844,
                     51.440412411363404
                  ],
                  [
                     6.61793505005815,
                     51.44109455988519
                  ],
                  [
                     6.617198531814082,
                     51.44138066740206
                  ],
                  [
                     6.616050541050958,
                     51.441826342575055
                  ],
                  [
                     6.614871115837024,
                     51.44230745261858
                  ],
                  [
                     6.614252526390295,
                     51.442561629988695
                  ],
                  [
                     6.613625806463213,
                     51.44282124219844
                  ],
                  [
                     6.612792048858237,
                     51.44316659999288
                  ],
                  [
                     6.612394882047259,
                     51.44333292921953
                  ],
                  [
                     6.613370402995474,
                     51.444148850367704
                  ],
                  [
                     6.614567461171922,
                     51.44521883436367
                  ],
                  [
                     6.616169096705446,
                     51.44654444412064
                  ],
                  [
                     6.616176429075026,
                     51.446551650138986
                  ],
                  [
                     6.616888167900461,
                     51.44724941626509
                  ],
                  [
                     6.617114130387037,
                     51.44748363068951
                  ],
                  [
                     6.617618433878338,
                     51.44800623246253
                  ],
                  [
                     6.618243942439106,
                     51.4486280410283
                  ],
                  [
                     6.618463710428918,
                     51.44884679517984
                  ],
                  [
                     6.618488397113097,
                     51.44887140032554
                  ],
                  [
                     6.61890080696375,
                     51.4492819410882
                  ],
                  [
                     6.61923475498986,
                     51.449646396319615
                  ],
                  [
                     6.619326610901139,
                     51.44977547460915
                  ],
                  [
                     6.619544107148726,
                     51.450080801269
                  ],
                  [
                     6.619821293321525,
                     51.45059643356351
                  ],
                  [
                     6.620162736168599,
                     51.45121806204008
                  ],
                  [
                     6.620280341620367,
                     51.45135058339611
                  ],
                  [
                     6.62059740524241,
                     51.45171053292507
                  ],
                  [
                     6.621106015864811,
                     51.45243936925104
                  ],
                  [
                     6.621346471188954,
                     51.45268625566022
                  ],
                  [
                     6.621545358341629,
                     51.45288489682818
                  ],
                  [
                     6.621635038538208,
                     51.45297445943099
                  ],
                  [
                     6.621755813817523,
                     51.45309508362046
                  ],
                  [
                     6.622077264571023,
                     51.45353599877426
                  ],
                  [
                     6.62221260121214,
                     51.453785631854316
                  ],
                  [
                     6.6228536384587,
                     51.45544510595833
                  ],
                  [
                     6.623018839919259,
                     51.455726093469686
                  ],
                  [
                     6.623059259977598,
                     51.45578129540517
                  ],
                  [
                     6.623330856424272,
                     51.45615272014257
                  ],
                  [
                     6.623594225804802,
                     51.45628288628381
                  ],
                  [
                     6.623367227333167,
                     51.456559160532414
                  ],
                  [
                     6.622773751369892,
                     51.457265885820284
                  ],
                  [
                     6.622532470127127,
                     51.4578617069488
                  ],
                  [
                     6.622505943340171,
                     51.45804800295056
                  ],
                  [
                     6.622458640713799,
                     51.45837612660341
                  ],
                  [
                     6.622303257426143,
                     51.45934435110643
                  ],
                  [
                     6.62215764546827,
                     51.45987416183094
                  ],
                  [
                     6.622040082980011,
                     51.460157123974916
                  ],
                  [
                     6.621660879330765,
                     51.46062266399602
                  ],
                  [
                     6.621359519715251,
                     51.460941611587735
                  ],
                  [
                     6.620953366048023,
                     51.461231321005414
                  ],
                  [
                     6.623733395109088,
                     51.46206885426521
                  ],
                  [
                     6.627852741664504,
                     51.462935238429495
                  ],
                  [
                     6.628660457669636,
                     51.463104931991595
                  ],
                  [
                     6.629098670029605,
                     51.46319232870958
                  ],
                  [
                     6.629039218294741,
                     51.46331313850954
                  ],
                  [
                     6.629113767482491,
                     51.463331730643404
                  ],
                  [
                     6.629453441108255,
                     51.46343786554306
                  ],
                  [
                     6.629444818239001,
                     51.463613348572125
                  ],
                  [
                     6.629426004598547,
                     51.464060922391994
                  ],
                  [
                     6.6296608392845,
                     51.46409804013603
                  ],
                  [
                     6.630677864393836,
                     51.4642587663242
                  ],
                  [
                     6.630686056177205,
                     51.46426009737554
                  ],
                  [
                     6.63085133613205,
                     51.46428917328948
                  ]
               ]
            ]
         }
      }
   }
 }
}, {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }]);
