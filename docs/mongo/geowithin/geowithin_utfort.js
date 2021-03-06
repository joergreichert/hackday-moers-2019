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
                     6.621017971183889,
                     51.48169395605369
                  ],
                  [
                     6.621493185236094,
                     51.481412879902436
                  ],
                  [
                     6.621879136675987,
                     51.48117735798477
                  ],
                  [
                     6.621974136386534,
                     51.48111874368452
                  ],
                  [
                     6.622225915755464,
                     51.48094043420997
                  ],
                  [
                     6.622565595174854,
                     51.48069464773191
                  ],
                  [
                     6.623170751135928,
                     51.48031300005346
                  ],
                  [
                     6.625442972669956,
                     51.478784834500416
                  ],
                  [
                     6.626713275983622,
                     51.47792359876414
                  ],
                  [
                     6.627450739027928,
                     51.47742256509659
                  ],
                  [
                     6.627534433937195,
                     51.47736563305927
                  ],
                  [
                     6.627752010469366,
                     51.477226332540425
                  ],
                  [
                     6.62792896006174,
                     51.47711584216574
                  ],
                  [
                     6.628013550190621,
                     51.4771835219615
                  ],
                  [
                     6.628059294613422,
                     51.47721070981306
                  ],
                  [
                     6.628310928683557,
                     51.47719906986236
                  ],
                  [
                     6.628583649760412,
                     51.477186381252345
                  ],
                  [
                     6.628790528008471,
                     51.47717649880193
                  ],
                  [
                     6.628947017117847,
                     51.47716901667519
                  ],
                  [
                     6.629103290657238,
                     51.47716156246988
                  ],
                  [
                     6.629259564148853,
                     51.47715410806456
                  ],
                  [
                     6.62941297513761,
                     51.477146794669
                  ],
                  [
                     6.629438076150709,
                     51.47714559923459
                  ],
                  [
                     6.629698537770054,
                     51.477133261255716
                  ],
                  [
                     6.629958295068035,
                     51.477120961865026
                  ],
                  [
                     6.630215909569474,
                     51.477108762639524
                  ],
                  [
                     6.630437215563697,
                     51.47709816952446
                  ],
                  [
                     6.630473525890195,
                     51.477095664015785
                  ],
                  [
                     6.630509264717892,
                     51.477093467178896
                  ],
                  [
                     6.630689295955634,
                     51.47708133411044
                  ],
                  [
                     6.631011098626907,
                     51.477060176596794
                  ],
                  [
                     6.631245190170998,
                     51.47704467727319
                  ],
                  [
                     6.631233752370568,
                     51.476912181174356
                  ],
                  [
                     6.632037753967675,
                     51.47688261723711
                  ],
                  [
                     6.632057851109063,
                     51.47688179852358
                  ],
                  [
                     6.632169233045616,
                     51.47687977621478
                  ],
                  [
                     6.63230343750315,
                     51.476879365123295
                  ],
                  [
                     6.632825883242108,
                     51.476856603019094
                  ],
                  [
                     6.633132187769021,
                     51.47684325184209
                  ],
                  [
                     6.633282427129717,
                     51.47683671303824
                  ],
                  [
                     6.633424337255717,
                     51.47683052473017
                  ],
                  [
                     6.633433869270774,
                     51.4767861329128
                  ],
                  [
                     6.633469955398452,
                     51.476800705598095
                  ],
                  [
                     6.633652559083091,
                     51.476820605947786
                  ],
                  [
                     6.633670008234199,
                     51.476819837297874
                  ],
                  [
                     6.633688320456007,
                     51.47681902801601
                  ],
                  [
                     6.634225647120965,
                     51.476795285943716
                  ],
                  [
                     6.634269219605804,
                     51.47679335910697
                  ],
                  [
                     6.634394825780324,
                     51.47679162418233
                  ],
                  [
                     6.634537545644676,
                     51.47592899353695
                  ],
                  [
                     6.635030811135965,
                     51.47294977562293
                  ],
                  [
                     6.634665356151431,
                     51.47291851833077
                  ],
                  [
                     6.635314769029582,
                     51.470350719802845
                  ],
                  [
                     6.635604949980917,
                     51.469086644874
                  ],
                  [
                     6.635909537581544,
                     51.467759615839185
                  ],
                  [
                     6.636101463306149,
                     51.46692321241754
                  ],
                  [
                     6.636526473433031,
                     51.465076035540676
                  ],
                  [
                     6.635174941119363,
                     51.465012267435576
                  ],
                  [
                     6.635141519905204,
                     51.464976510872056
                  ],
                  [
                     6.635092832823776,
                     51.46491500301323
                  ],
                  [
                     6.635133978682517,
                     51.464714832946385
                  ],
                  [
                     6.635187928131526,
                     51.46445232974119
                  ],
                  [
                     6.634963807744819,
                     51.464420708951224
                  ],
                  [
                     6.634542622060381,
                     51.46436165258452
                  ],
                  [
                     6.634129439575134,
                     51.464303711526306
                  ],
                  [
                     6.633675411646641,
                     51.464240050514505
                  ],
                  [
                     6.633514849321874,
                     51.46470979751092
                  ],
                  [
                     6.633437084193266,
                     51.464697139502995
                  ],
                  [
                     6.633124793753409,
                     51.464645956714065
                  ],
                  [
                     6.633073626447721,
                     51.46463782894742
                  ],
                  [
                     6.632608305039979,
                     51.46456388693314
                  ],
                  [
                     6.632292716065119,
                     51.464513721628826
                  ],
                  [
                     6.632239127612682,
                     51.464505364509435
                  ],
                  [
                     6.632094456332871,
                     51.464482803653745
                  ],
                  [
                     6.63205981716198,
                     51.464477400081726
                  ],
                  [
                     6.631701168875124,
                     51.464421461485955
                  ],
                  [
                     6.631625041068204,
                     51.464409585493506
                  ],
                  [
                     6.631406291426946,
                     51.464375469166974
                  ],
                  [
                     6.631236616406671,
                     51.464349006339106
                  ],
                  [
                     6.631059454970663,
                     51.464321361431594
                  ],
                  [
                     6.631003242217104,
                     51.4643125954658
                  ],
                  [
                     6.63097181917582,
                     51.46430770454445
                  ],
                  [
                     6.63085133613205,
                     51.46428917328948
                  ],
                  [
                     6.630686056177205,
                     51.46426009737554
                  ],
                  [
                     6.630677864393836,
                     51.4642587663242
                  ],
                  [
                     6.6296608392845,
                     51.46409804013603
                  ],
                  [
                     6.629426004598547,
                     51.464060922391994
                  ],
                  [
                     6.629444818239001,
                     51.463613348572125
                  ],
                  [
                     6.629453441108255,
                     51.46343786554306
                  ],
                  [
                     6.629113767482491,
                     51.463331730643404
                  ],
                  [
                     6.629039218294741,
                     51.46331313850954
                  ],
                  [
                     6.629098670029605,
                     51.46319232870958
                  ],
                  [
                     6.628660457669636,
                     51.463104931991595
                  ],
                  [
                     6.627852741664504,
                     51.462935238429495
                  ],
                  [
                     6.623733395109088,
                     51.46206885426521
                  ],
                  [
                     6.620953366048023,
                     51.461231321005414
                  ],
                  [
                     6.620314197923867,
                     51.461582069542665
                  ],
                  [
                     6.61953101307619,
                     51.461969258063185
                  ],
                  [
                     6.619052404646899,
                     51.46227413940942
                  ],
                  [
                     6.618671223167778,
                     51.46264395791073
                  ],
                  [
                     6.618356147833858,
                     51.46301306653091
                  ],
                  [
                     6.618219786657801,
                     51.46317034891471
                  ],
                  [
                     6.617721192240013,
                     51.46374035383894
                  ],
                  [
                     6.61741641210857,
                     51.46408194327715
                  ],
                  [
                     6.615738299664182,
                     51.465904398859756
                  ],
                  [
                     6.614873744307374,
                     51.46683616935707
                  ],
                  [
                     6.613991321910667,
                     51.46764187991894
                  ],
                  [
                     6.613767429902188,
                     51.46782375311096
                  ],
                  [
                     6.613211560889662,
                     51.46811076455791
                  ],
                  [
                     6.612677762193917,
                     51.468432472935106
                  ],
                  [
                     6.612724391953999,
                     51.468635627129146
                  ],
                  [
                     6.612798399807777,
                     51.46899272641571
                  ],
                  [
                     6.612817584212833,
                     51.46941568328879
                  ],
                  [
                     6.612904877469714,
                     51.4698805943124
                  ],
                  [
                     6.613408491579332,
                     51.470410890812815
                  ],
                  [
                     6.614094592025952,
                     51.47118573235213
                  ],
                  [
                     6.616036745504029,
                     51.4717358996114
                  ],
                  [
                     6.616416112352399,
                     51.4718305637989
                  ],
                  [
                     6.615513081280303,
                     51.472105467788246
                  ],
                  [
                     6.61529330440697,
                     51.47234159978641
                  ],
                  [
                     6.615211616459825,
                     51.47261839649055
                  ],
                  [
                     6.615049335135107,
                     51.47275455159632
                  ],
                  [
                     6.614366709012899,
                     51.472912691251544
                  ],
                  [
                     6.613788965270562,
                     51.47299042258612
                  ],
                  [
                     6.612668110565322,
                     51.47316694778842
                  ],
                  [
                     6.612006219440863,
                     51.47356666810966
                  ],
                  [
                     6.610853026194026,
                     51.4742756655476
                  ],
                  [
                     6.610770762078222,
                     51.47432473001776
                  ],
                  [
                     6.609665841214983,
                     51.47518384075382
                  ],
                  [
                     6.609140244092607,
                     51.47608721929914
                  ],
                  [
                     6.608619406794893,
                     51.47722392466589
                  ],
                  [
                     6.608403790334278,
                     51.47780913044478
                  ],
                  [
                     6.610472536617187,
                     51.477737988362804
                  ],
                  [
                     6.610384524130978,
                     51.477924006200475
                  ],
                  [
                     6.6128309280786,
                     51.47782266005394
                  ],
                  [
                     6.614554886486111,
                     51.47774911164639
                  ],
                  [
                     6.614562955799258,
                     51.47774868277784
                  ],
                  [
                     6.618556255611852,
                     51.477552087046085
                  ],
                  [
                     6.618611475054372,
                     51.47754918877728
                  ],
                  [
                     6.618939033072932,
                     51.478366079777544
                  ],
                  [
                     6.619398860123313,
                     51.479534409994095
                  ],
                  [
                     6.619494242052006,
                     51.47977572108796
                  ],
                  [
                     6.619508723746531,
                     51.479823364021875
                  ],
                  [
                     6.619901701736329,
                     51.480431203911486
                  ],
                  [
                     6.620037994802461,
                     51.480623706953196
                  ],
                  [
                     6.620068262968797,
                     51.48068681632699
                  ],
                  [
                     6.620085977040784,
                     51.480740293608676
                  ],
                  [
                     6.620092202675495,
                     51.48083071114286
                  ],
                  [
                     6.620100684275052,
                     51.48100874555958
                  ],
                  [
                     6.621017971183889,
                     51.48169395605369
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
