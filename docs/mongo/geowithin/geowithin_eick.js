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
                     6.633975163266139,
                     51.489327251105216
                  ],
                  [
                     6.634717099295978,
                     51.48931774076797
                  ],
                  [
                     6.635364610919022,
                     51.48937872485324
                  ],
                  [
                     6.636031924290394,
                     51.489481734239625
                  ],
                  [
                     6.637446257962633,
                     51.48973719672565
                  ],
                  [
                     6.637534701788116,
                     51.48965567611394
                  ],
                  [
                     6.637580402956939,
                     51.48961359560986
                  ],
                  [
                     6.637768966779698,
                     51.48943994923552
                  ],
                  [
                     6.638659257248711,
                     51.488599672263405
                  ],
                  [
                     6.638692156990587,
                     51.48856900342882
                  ],
                  [
                     6.639662319894716,
                     51.487659594751726
                  ],
                  [
                     6.640038127427784,
                     51.4871339874871
                  ],
                  [
                     6.640381817630622,
                     51.48641950331636
                  ],
                  [
                     6.640727563913588,
                     51.48570143201856
                  ],
                  [
                     6.640778087160954,
                     51.485597183599005
                  ],
                  [
                     6.640931055770693,
                     51.485281590404426
                  ],
                  [
                     6.641140926306556,
                     51.48484858442676
                  ],
                  [
                     6.641244788776189,
                     51.48463427273311
                  ],
                  [
                     6.641845729810927,
                     51.48339426429429
                  ],
                  [
                     6.641861285884439,
                     51.483362169203765
                  ],
                  [
                     6.642097686965044,
                     51.4828743389681
                  ],
                  [
                     6.642253184046468,
                     51.48255341616216
                  ],
                  [
                     6.642306506159239,
                     51.48244337281034
                  ],
                  [
                     6.642345532090515,
                     51.482362838958224
                  ],
                  [
                     6.642591581622486,
                     51.48186134537465
                  ],
                  [
                     6.642641120538585,
                     51.4817604896092
                  ],
                  [
                     6.642662107967857,
                     51.48171749824137
                  ],
                  [
                     6.642694446366643,
                     51.48165153240824
                  ],
                  [
                     6.642724120089884,
                     51.48159057000083
                  ],
                  [
                     6.64277124536778,
                     51.48149415941936
                  ],
                  [
                     6.643682200342323,
                     51.48214454373241
                  ],
                  [
                     6.644455202879436,
                     51.48269601669046
                  ],
                  [
                     6.64498886021308,
                     51.48308810378612
                  ],
                  [
                     6.64511367427895,
                     51.48317980350043
                  ],
                  [
                     6.645156457478797,
                     51.48321122732017
                  ],
                  [
                     6.645541351733963,
                     51.483488053367616
                  ],
                  [
                     6.645871766436134,
                     51.4837063610416
                  ],
                  [
                     6.646301788646905,
                     51.48403445077507
                  ],
                  [
                     6.646576768524543,
                     51.48429547498098
                  ],
                  [
                     6.646831254076636,
                     51.484581000292096
                  ],
                  [
                     6.647778515609205,
                     51.48574643486293
                  ],
                  [
                     6.648600438772498,
                     51.486655588758715
                  ],
                  [
                     6.649412353551843,
                     51.487759033735124
                  ],
                  [
                     6.650003544967573,
                     51.48840002584832
                  ],
                  [
                     6.650321360573852,
                     51.48862683992828
                  ],
                  [
                     6.650780087554996,
                     51.4888606905607
                  ],
                  [
                     6.65124128948848,
                     51.48901533763369
                  ],
                  [
                     6.651334601133549,
                     51.48904663827009
                  ],
                  [
                     6.651394350038182,
                     51.48906671000187
                  ],
                  [
                     6.652047475239513,
                     51.48923107195843
                  ],
                  [
                     6.652694813355524,
                     51.48933317894578
                  ],
                  [
                     6.653345139178018,
                     51.489321831319685
                  ],
                  [
                     6.653830295071923,
                     51.489227532012634
                  ],
                  [
                     6.654202310735797,
                     51.48915525446884
                  ],
                  [
                     6.654898672029876,
                     51.48896027265607
                  ],
                  [
                     6.656822938298259,
                     51.48805057442139
                  ],
                  [
                     6.659046542482192,
                     51.486999950868594
                  ],
                  [
                     6.659059151228591,
                     51.486993722382564
                  ],
                  [
                     6.659089588837071,
                     51.486979842679595
                  ],
                  [
                     6.659167231381653,
                     51.486942730510265
                  ],
                  [
                     6.659685021435301,
                     51.48669829075493
                  ],
                  [
                     6.661447349712222,
                     51.485864659788874
                  ],
                  [
                     6.661868427949862,
                     51.48566506104869
                  ],
                  [
                     6.662845409231389,
                     51.48520182685071
                  ],
                  [
                     6.663016546934388,
                     51.48512066786738
                  ],
                  [
                     6.663659365503284,
                     51.48481598092337
                  ],
                  [
                     6.663763027095126,
                     51.484766860314195
                  ],
                  [
                     6.664924899502895,
                     51.48421849561335
                  ],
                  [
                     6.66502612424943,
                     51.48417028512504
                  ],
                  [
                     6.665123345208755,
                     51.484123985473936
                  ],
                  [
                     6.665147077495063,
                     51.4841126161305
                  ],
                  [
                     6.665152368346841,
                     51.48411015942873
                  ],
                  [
                     6.665932695314897,
                     51.48373914314574
                  ],
                  [
                     6.665993317284521,
                     51.4837104855101
                  ],
                  [
                     6.666077819387558,
                     51.48367063347328
                  ],
                  [
                     6.666207651481296,
                     51.4836095766838
                  ],
                  [
                     6.665880184345656,
                     51.483415764113026
                  ],
                  [
                     6.665831608547026,
                     51.48338190757733
                  ],
                  [
                     6.665703770337602,
                     51.48329280383786
                  ],
                  [
                     6.6654037376118,
                     51.48308362237477
                  ],
                  [
                     6.664969521287674,
                     51.48272518957321
                  ],
                  [
                     6.6645167599579,
                     51.48233864131836
                  ],
                  [
                     6.664456868500459,
                     51.48228873317453
                  ],
                  [
                     6.664415146547397,
                     51.482250857220485
                  ],
                  [
                     6.664131707499444,
                     51.48199385725273
                  ],
                  [
                     6.663715479727324,
                     51.48163324884038
                  ],
                  [
                     6.663292056643242,
                     51.48126306472138
                  ],
                  [
                     6.663043351848617,
                     51.48103822575133
                  ],
                  [
                     6.662993634399546,
                     51.48098879961068
                  ],
                  [
                     6.662917014327567,
                     51.4809126495566
                  ],
                  [
                     6.662904308140065,
                     51.48090004732051
                  ],
                  [
                     6.66270903487618,
                     51.48072578002852
                  ],
                  [
                     6.662488231834646,
                     51.48058778967513
                  ],
                  [
                     6.662184049320837,
                     51.48032910194873
                  ],
                  [
                     6.661942401416239,
                     51.48012233047635
                  ],
                  [
                     6.661816368372713,
                     51.48001522098698
                  ],
                  [
                     6.661630942568118,
                     51.47985694186265
                  ],
                  [
                     6.661347908729231,
                     51.47961534968749
                  ],
                  [
                     6.660927516096665,
                     51.47925264427791
                  ],
                  [
                     6.660492168546034,
                     51.47889511962786
                  ],
                  [
                     6.660031895906007,
                     51.47849921327299
                  ],
                  [
                     6.659059105209494,
                     51.47765503633939
                  ],
                  [
                     6.65905906254731,
                     51.47765507253185
                  ],
                  [
                     6.658214179726704,
                     51.476930245997394
                  ],
                  [
                     6.657338174239408,
                     51.4761842636385
                  ],
                  [
                     6.657330261819091,
                     51.47617753076278
                  ],
                  [
                     6.657359594151434,
                     51.47614732739244
                  ],
                  [
                     6.657314569882019,
                     51.476124200990036
                  ],
                  [
                     6.657297475159588,
                     51.476148601228275
                  ],
                  [
                     6.65680300228504,
                     51.47572167486332
                  ],
                  [
                     6.656449721887166,
                     51.47542118673433
                  ],
                  [
                     6.656296753912549,
                     51.47529107429757
                  ],
                  [
                     6.656369245870498,
                     51.4752413590076
                  ],
                  [
                     6.656305900616434,
                     51.475181132536484
                  ],
                  [
                     6.656256671018308,
                     51.47501920572058
                  ],
                  [
                     6.656181973757913,
                     51.474933093651785
                  ],
                  [
                     6.656028501142971,
                     51.47485980800289
                  ],
                  [
                     6.655531125928551,
                     51.47451235014369
                  ],
                  [
                     6.654915824676736,
                     51.47397266926821
                  ],
                  [
                     6.654899003680431,
                     51.47393671109006
                  ],
                  [
                     6.654685605223248,
                     51.47398415718489
                  ],
                  [
                     6.654438689699758,
                     51.47377892206638
                  ],
                  [
                     6.648263562676446,
                     51.474578873426346
                  ],
                  [
                     6.645897705854637,
                     51.47488514318569
                  ],
                  [
                     6.643127811272718,
                     51.47519551468881
                  ],
                  [
                     6.64206132975966,
                     51.47534977029758
                  ],
                  [
                     6.640467252044165,
                     51.4755825534931
                  ],
                  [
                     6.639808447030195,
                     51.475678434710446
                  ],
                  [
                     6.63622440887013,
                     51.476197760104455
                  ],
                  [
                     6.635994241781293,
                     51.4758139707554
                  ],
                  [
                     6.63481872682342,
                     51.47576518687297
                  ],
                  [
                     6.634537545644676,
                     51.47592899353695
                  ],
                  [
                     6.634394825780324,
                     51.47679162418233
                  ],
                  [
                     6.634269219605804,
                     51.47679335910697
                  ],
                  [
                     6.634225647120965,
                     51.476795285943716
                  ],
                  [
                     6.633688320456007,
                     51.47681902801601
                  ],
                  [
                     6.633670008234199,
                     51.476819837297874
                  ],
                  [
                     6.633652559083091,
                     51.476820605947786
                  ],
                  [
                     6.633469955398452,
                     51.476800705598095
                  ],
                  [
                     6.633433869270774,
                     51.4767861329128
                  ],
                  [
                     6.633424337255717,
                     51.47683052473017
                  ],
                  [
                     6.633282427129717,
                     51.47683671303824
                  ],
                  [
                     6.633132187769021,
                     51.47684325184209
                  ],
                  [
                     6.632825883242108,
                     51.476856603019094
                  ],
                  [
                     6.63230343750315,
                     51.476879365123295
                  ],
                  [
                     6.632169233045616,
                     51.47687977621478
                  ],
                  [
                     6.632057851109063,
                     51.47688179852358
                  ],
                  [
                     6.632037753967675,
                     51.47688261723711
                  ],
                  [
                     6.631233752370568,
                     51.476912181174356
                  ],
                  [
                     6.631245190170998,
                     51.47704467727319
                  ],
                  [
                     6.631011098626907,
                     51.477060176596794
                  ],
                  [
                     6.630689295955634,
                     51.47708133411044
                  ],
                  [
                     6.630509264717892,
                     51.477093467178896
                  ],
                  [
                     6.630473525890195,
                     51.477095664015785
                  ],
                  [
                     6.630437215563697,
                     51.47709816952446
                  ],
                  [
                     6.630215909569474,
                     51.477108762639524
                  ],
                  [
                     6.629958295068035,
                     51.477120961865026
                  ],
                  [
                     6.629698537770054,
                     51.477133261255716
                  ],
                  [
                     6.629438076150709,
                     51.47714559923459
                  ],
                  [
                     6.62941297513761,
                     51.477146794669
                  ],
                  [
                     6.629259564148853,
                     51.47715410806456
                  ],
                  [
                     6.629103290657238,
                     51.47716156246988
                  ],
                  [
                     6.628947017117847,
                     51.47716901667519
                  ],
                  [
                     6.628790528008471,
                     51.47717649880193
                  ],
                  [
                     6.628583649760412,
                     51.477186381252345
                  ],
                  [
                     6.628310928683557,
                     51.47719906986236
                  ],
                  [
                     6.628059294613422,
                     51.47721070981306
                  ],
                  [
                     6.628013550190621,
                     51.4771835219615
                  ],
                  [
                     6.62792896006174,
                     51.47711584216574
                  ],
                  [
                     6.627752010469366,
                     51.477226332540425
                  ],
                  [
                     6.627534433937195,
                     51.47736563305927
                  ],
                  [
                     6.627450739027928,
                     51.47742256509659
                  ],
                  [
                     6.626713275983622,
                     51.47792359876414
                  ],
                  [
                     6.625442972669956,
                     51.478784834500416
                  ],
                  [
                     6.623170751135928,
                     51.48031300005346
                  ],
                  [
                     6.622565595174854,
                     51.48069464773191
                  ],
                  [
                     6.622225915755464,
                     51.48094043420997
                  ],
                  [
                     6.621974136386534,
                     51.48111874368452
                  ],
                  [
                     6.621879136675987,
                     51.48117735798477
                  ],
                  [
                     6.621493185236094,
                     51.481412879902436
                  ],
                  [
                     6.621017971183889,
                     51.48169395605369
                  ],
                  [
                     6.621429141894066,
                     51.48231389604133
                  ],
                  [
                     6.62157132707686,
                     51.48251707574654
                  ],
                  [
                     6.622194121814179,
                     51.483055894611255
                  ],
                  [
                     6.622880416950556,
                     51.48365192559391
                  ],
                  [
                     6.623097539082275,
                     51.48365744018321
                  ],
                  [
                     6.62325461339098,
                     51.4832712190214
                  ],
                  [
                     6.6234289887383,
                     51.482977328525536
                  ],
                  [
                     6.623587092365359,
                     51.482756540119055
                  ],
                  [
                     6.623793064338521,
                     51.48254231905716
                  ],
                  [
                     6.62393949877391,
                     51.48242273742417
                  ],
                  [
                     6.623962941927477,
                     51.48244908341325
                  ],
                  [
                     6.624000825290064,
                     51.48248268693324
                  ],
                  [
                     6.624031259578809,
                     51.48250961577598
                  ],
                  [
                     6.624098687795648,
                     51.482569253893814
                  ],
                  [
                     6.624159529051397,
                     51.48262313151294
                  ],
                  [
                     6.624124107244763,
                     51.48263977006053
                  ],
                  [
                     6.624086110502422,
                     51.482657626826004
                  ],
                  [
                     6.624148687721978,
                     51.48270798078723
                  ],
                  [
                     6.624353976078609,
                     51.482873170673145
                  ],
                  [
                     6.624336330634821,
                     51.48288184883368
                  ],
                  [
                     6.624443193650859,
                     51.48296519984362
                  ],
                  [
                     6.624458794274488,
                     51.482957521306474
                  ],
                  [
                     6.624463335168666,
                     51.4829611735629
                  ],
                  [
                     6.624837153603835,
                     51.48326179968393
                  ],
                  [
                     6.625168974784133,
                     51.48352903829168
                  ],
                  [
                     6.625210816982109,
                     51.4835622803497
                  ],
                  [
                     6.625313434440532,
                     51.48364465437903
                  ],
                  [
                     6.625405763837892,
                     51.48371903719732
                  ],
                  [
                     6.625458440141129,
                     51.48376140654606
                  ],
                  [
                     6.625586310516502,
                     51.48386422651516
                  ],
                  [
                     6.625681183904256,
                     51.483940535513476
                  ],
                  [
                     6.625960564642525,
                     51.48416517489397
                  ],
                  [
                     6.626119987246623,
                     51.48429337684998
                  ],
                  [
                     6.626172880024302,
                     51.48433590435586
                  ],
                  [
                     6.626254344651611,
                     51.4844014054162
                  ],
                  [
                     6.626263150491599,
                     51.484408485885304
                  ],
                  [
                     6.626348484875678,
                     51.48435948496804
                  ],
                  [
                     6.626402174167388,
                     51.484395968107975
                  ],
                  [
                     6.62648257980393,
                     51.48441110544528
                  ],
                  [
                     6.626574141928424,
                     51.484455807761755
                  ],
                  [
                     6.626022387812997,
                     51.484761836197585
                  ],
                  [
                     6.626873975412895,
                     51.48536949623269
                  ],
                  [
                     6.628081653363765,
                     51.48601151517753
                  ],
                  [
                     6.628084820971947,
                     51.48602622055934
                  ],
                  [
                     6.627962142324495,
                     51.48616111371488
                  ],
                  [
                     6.62794420133478,
                     51.48618083966878
                  ],
                  [
                     6.627926473044529,
                     51.48620033080089
                  ],
                  [
                     6.628210586567781,
                     51.48624926680682
                  ],
                  [
                     6.628591900094206,
                     51.486320655096605
                  ],
                  [
                     6.628642055402376,
                     51.486331954080704
                  ],
                  [
                     6.62876786374348,
                     51.486359853214125
                  ],
                  [
                     6.628818558210527,
                     51.48637475346542
                  ],
                  [
                     6.628930210677483,
                     51.48640758186657
                  ],
                  [
                     6.629215476551023,
                     51.48655860248693
                  ],
                  [
                     6.629342970116449,
                     51.48662611413696
                  ],
                  [
                     6.629658803833731,
                     51.48675307126175
                  ],
                  [
                     6.629776862784636,
                     51.48678989243142
                  ],
                  [
                     6.630227006161542,
                     51.486930284037165
                  ],
                  [
                     6.630246502180422,
                     51.48693880821537
                  ],
                  [
                     6.63055073032898,
                     51.487067407452194
                  ],
                  [
                     6.630797931017296,
                     51.487193732919316
                  ],
                  [
                     6.631000128160859,
                     51.487308623657576
                  ],
                  [
                     6.631595849287099,
                     51.48764767858923
                  ],
                  [
                     6.631806076453985,
                     51.48777973646425
                  ],
                  [
                     6.631937827117022,
                     51.48786928815166
                  ],
                  [
                     6.632018160199344,
                     51.48793141451047
                  ],
                  [
                     6.632096800791119,
                     51.488004380929546
                  ],
                  [
                     6.632409364784658,
                     51.48833051175124
                  ],
                  [
                     6.632535688028899,
                     51.488462445343835
                  ],
                  [
                     6.632618418370009,
                     51.48854882700946
                  ],
                  [
                     6.632653124905543,
                     51.48860035873168
                  ],
                  [
                     6.632708396413079,
                     51.488682402738895
                  ],
                  [
                     6.632762146275754,
                     51.488804228151054
                  ],
                  [
                     6.632785444348694,
                     51.48891348155072
                  ],
                  [
                     6.632777659135712,
                     51.48897397038333
                  ],
                  [
                     6.632732290692878,
                     51.48915237416779
                  ],
                  [
                     6.632671742808424,
                     51.48935155713592
                  ],
                  [
                     6.633367039429745,
                     51.4893184746907
                  ],
                  [
                     6.633975163266139,
                     51.489327251105216
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
