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
                     6.613041737460427,
                     51.49342606745728
                  ],
                  [
                     6.613556179648751,
                     51.49330504814027
                  ],
                  [
                     6.618475682232435,
                     51.49214002241243
                  ],
                  [
                     6.62006581983477,
                     51.49176679898055
                  ],
                  [
                     6.623451613063177,
                     51.490968844270036
                  ],
                  [
                     6.627453480128617,
                     51.49003916063952
                  ],
                  [
                     6.628776133607913,
                     51.48971840110196
                  ],
                  [
                     6.63024467890586,
                     51.489518993963955
                  ],
                  [
                     6.631571828325433,
                     51.489401369294285
                  ],
                  [
                     6.632671742808424,
                     51.48935155713592
                  ],
                  [
                     6.632732290692878,
                     51.48915237416779
                  ],
                  [
                     6.632777659135712,
                     51.48897397038333
                  ],
                  [
                     6.632785444348694,
                     51.48891348155072
                  ],
                  [
                     6.632762146275754,
                     51.488804228151054
                  ],
                  [
                     6.632708396413079,
                     51.488682402738895
                  ],
                  [
                     6.632653124905543,
                     51.48860035873168
                  ],
                  [
                     6.632618418370009,
                     51.48854882700946
                  ],
                  [
                     6.632535688028899,
                     51.488462445343835
                  ],
                  [
                     6.632409364784658,
                     51.48833051175124
                  ],
                  [
                     6.632096800791119,
                     51.488004380929546
                  ],
                  [
                     6.632018160199344,
                     51.48793141451047
                  ],
                  [
                     6.631937827117022,
                     51.48786928815166
                  ],
                  [
                     6.631806076453985,
                     51.48777973646425
                  ],
                  [
                     6.631595849287099,
                     51.48764767858923
                  ],
                  [
                     6.631000128160859,
                     51.487308623657576
                  ],
                  [
                     6.630797931017296,
                     51.487193732919316
                  ],
                  [
                     6.63055073032898,
                     51.487067407452194
                  ],
                  [
                     6.630246502180422,
                     51.48693880821537
                  ],
                  [
                     6.630227006161542,
                     51.486930284037165
                  ],
                  [
                     6.629776862784636,
                     51.48678989243142
                  ],
                  [
                     6.629658803833731,
                     51.48675307126175
                  ],
                  [
                     6.629342970116449,
                     51.48662611413696
                  ],
                  [
                     6.629215476551023,
                     51.48655860248693
                  ],
                  [
                     6.628930210677483,
                     51.48640758186657
                  ],
                  [
                     6.628818558210527,
                     51.48637475346542
                  ],
                  [
                     6.62876786374348,
                     51.486359853214125
                  ],
                  [
                     6.628642055402376,
                     51.486331954080704
                  ],
                  [
                     6.628591900094206,
                     51.486320655096605
                  ],
                  [
                     6.628210586567781,
                     51.48624926680682
                  ],
                  [
                     6.627926473044529,
                     51.48620033080089
                  ],
                  [
                     6.62794420133478,
                     51.48618083966878
                  ],
                  [
                     6.627962142324495,
                     51.48616111371488
                  ],
                  [
                     6.628084820971947,
                     51.48602622055934
                  ],
                  [
                     6.628081653363765,
                     51.48601151517753
                  ],
                  [
                     6.626873975412895,
                     51.48536949623269
                  ],
                  [
                     6.626022387812997,
                     51.484761836197585
                  ],
                  [
                     6.626574141928424,
                     51.484455807761755
                  ],
                  [
                     6.62648257980393,
                     51.48441110544528
                  ],
                  [
                     6.626402174167388,
                     51.484395968107975
                  ],
                  [
                     6.626348484875678,
                     51.48435948496804
                  ],
                  [
                     6.626263150491599,
                     51.484408485885304
                  ],
                  [
                     6.626254344651611,
                     51.4844014054162
                  ],
                  [
                     6.626172880024302,
                     51.48433590435586
                  ],
                  [
                     6.626119987246623,
                     51.48429337684998
                  ],
                  [
                     6.625960564642525,
                     51.48416517489397
                  ],
                  [
                     6.625681183904256,
                     51.483940535513476
                  ],
                  [
                     6.625586310516502,
                     51.48386422651516
                  ],
                  [
                     6.625458440141129,
                     51.48376140654606
                  ],
                  [
                     6.625405763837892,
                     51.48371903719732
                  ],
                  [
                     6.625313434440532,
                     51.48364465437903
                  ],
                  [
                     6.625210816982109,
                     51.4835622803497
                  ],
                  [
                     6.625168974784133,
                     51.48352903829168
                  ],
                  [
                     6.624837153603835,
                     51.48326179968393
                  ],
                  [
                     6.624463335168666,
                     51.4829611735629
                  ],
                  [
                     6.624458794274488,
                     51.482957521306474
                  ],
                  [
                     6.624443193650859,
                     51.48296519984362
                  ],
                  [
                     6.624336330634821,
                     51.48288184883368
                  ],
                  [
                     6.624353976078609,
                     51.482873170673145
                  ],
                  [
                     6.624148687721978,
                     51.48270798078723
                  ],
                  [
                     6.624086110502422,
                     51.482657626826004
                  ],
                  [
                     6.624124107244763,
                     51.48263977006053
                  ],
                  [
                     6.624159529051397,
                     51.48262313151294
                  ],
                  [
                     6.624098687795648,
                     51.482569253893814
                  ],
                  [
                     6.624031259578809,
                     51.48250961577598
                  ],
                  [
                     6.624000825290064,
                     51.48248268693324
                  ],
                  [
                     6.623962941927477,
                     51.48244908341325
                  ],
                  [
                     6.62393949877391,
                     51.48242273742417
                  ],
                  [
                     6.623793064338521,
                     51.48254231905716
                  ],
                  [
                     6.623587092365359,
                     51.482756540119055
                  ],
                  [
                     6.6234289887383,
                     51.482977328525536
                  ],
                  [
                     6.62325461339098,
                     51.4832712190214
                  ],
                  [
                     6.623097539082275,
                     51.48365744018321
                  ],
                  [
                     6.622880416950556,
                     51.48365192559391
                  ],
                  [
                     6.622194121814179,
                     51.483055894611255
                  ],
                  [
                     6.62157132707686,
                     51.48251707574654
                  ],
                  [
                     6.621429141894066,
                     51.48231389604133
                  ],
                  [
                     6.621017971183889,
                     51.48169395605369
                  ],
                  [
                     6.620100684275052,
                     51.48100874555958
                  ],
                  [
                     6.620092202675495,
                     51.48083071114286
                  ],
                  [
                     6.620085977040784,
                     51.480740293608676
                  ],
                  [
                     6.620068262968797,
                     51.48068681632699
                  ],
                  [
                     6.620037994802461,
                     51.480623706953196
                  ],
                  [
                     6.619901701736329,
                     51.480431203911486
                  ],
                  [
                     6.619508723746531,
                     51.479823364021875
                  ],
                  [
                     6.619494242052006,
                     51.47977572108796
                  ],
                  [
                     6.619398860123313,
                     51.479534409994095
                  ],
                  [
                     6.618939033072932,
                     51.478366079777544
                  ],
                  [
                     6.618611475054372,
                     51.47754918877728
                  ],
                  [
                     6.618556255611852,
                     51.477552087046085
                  ],
                  [
                     6.614562955799258,
                     51.47774868277784
                  ],
                  [
                     6.614554886486111,
                     51.47774911164639
                  ],
                  [
                     6.6128309280786,
                     51.47782266005394
                  ],
                  [
                     6.610384524130978,
                     51.477924006200475
                  ],
                  [
                     6.610472536617187,
                     51.477737988362804
                  ],
                  [
                     6.608403790334278,
                     51.47780913044478
                  ],
                  [
                     6.608050195084815,
                     51.4787996738845
                  ],
                  [
                     6.607767868922009,
                     51.478755461958166
                  ],
                  [
                     6.607776584670599,
                     51.47880364807413
                  ],
                  [
                     6.607776017945813,
                     51.47882923181098
                  ],
                  [
                     6.607772160727907,
                     51.479003589524766
                  ],
                  [
                     6.60771788588836,
                     51.47917838865959
                  ],
                  [
                     6.607639145406542,
                     51.47993936967504
                  ],
                  [
                     6.607592870208297,
                     51.480568358982936
                  ],
                  [
                     6.607531118225066,
                     51.480777486602335
                  ],
                  [
                     6.607523160403906,
                     51.48108100777138
                  ],
                  [
                     6.60755917603262,
                     51.4813962727774
                  ],
                  [
                     6.607430004759131,
                     51.4813970394277
                  ],
                  [
                     6.607430907774024,
                     51.48147044169906
                  ],
                  [
                     6.60743150799019,
                     51.48151886791586
                  ],
                  [
                     6.607444102081548,
                     51.48154149843776
                  ],
                  [
                     6.607538204611314,
                     51.481710649092115
                  ],
                  [
                     6.607554537118364,
                     51.481909557647334
                  ],
                  [
                     6.607552190932523,
                     51.48217605973568
                  ],
                  [
                     6.607611496396551,
                     51.48232969021668
                  ],
                  [
                     6.607594128244003,
                     51.482578214228255
                  ],
                  [
                     6.607665657646236,
                     51.48268575506913
                  ],
                  [
                     6.607779215805642,
                     51.48281959228711
                  ],
                  [
                     6.607816648216633,
                     51.48287368642508
                  ],
                  [
                     6.607840219413714,
                     51.482931160273445
                  ],
                  [
                     6.607848747156163,
                     51.48298864940504
                  ],
                  [
                     6.607853575323822,
                     51.48304722736432
                  ],
                  [
                     6.607828642754486,
                     51.48337472533681
                  ],
                  [
                     6.607836725466932,
                     51.48349046040369
                  ],
                  [
                     6.607872596471021,
                     51.48360542183009
                  ],
                  [
                     6.607956851354055,
                     51.483784972822235
                  ],
                  [
                     6.607968639222586,
                     51.4838343557591
                  ],
                  [
                     6.607967256430092,
                     51.48387847716534
                  ],
                  [
                     6.607966142367523,
                     51.483952411121024
                  ],
                  [
                     6.607974298607059,
                     51.484026287873625
                  ],
                  [
                     6.608110062546942,
                     51.484433714070406
                  ],
                  [
                     6.608137713337877,
                     51.48450580115009
                  ],
                  [
                     6.608163301651662,
                     51.484579759571346
                  ],
                  [
                     6.608193544633789,
                     51.48465082648268
                  ],
                  [
                     6.60822679888537,
                     51.4847220754842
                  ],
                  [
                     6.608415431375914,
                     51.48508800847525
                  ],
                  [
                     6.608642791026947,
                     51.48549842395211
                  ],
                  [
                     6.608650119945553,
                     51.485511509228516
                  ],
                  [
                     6.608772914159778,
                     51.48570920458052
                  ],
                  [
                     6.608890673480817,
                     51.48588660283326
                  ],
                  [
                     6.609016036723345,
                     51.48605338134574
                  ],
                  [
                     6.609461251618023,
                     51.4865958968974
                  ],
                  [
                     6.609594044339342,
                     51.48681222963368
                  ],
                  [
                     6.609676730050939,
                     51.48694690715851
                  ],
                  [
                     6.609732615780365,
                     51.48704803753982
                  ],
                  [
                     6.609769966386263,
                     51.487115613468255
                  ],
                  [
                     6.609941405883179,
                     51.487316378136704
                  ],
                  [
                     6.60996786119537,
                     51.48734734822777
                  ],
                  [
                     6.609994784651953,
                     51.48737887313769
                  ],
                  [
                     6.610028368611583,
                     51.487415423660295
                  ],
                  [
                     6.610194671596053,
                     51.48751355249886
                  ],
                  [
                     6.610399308905772,
                     51.487654006050136
                  ],
                  [
                     6.610619631860113,
                     51.48782247626447
                  ],
                  [
                     6.610840074475795,
                     51.48795070461844
                  ],
                  [
                     6.611035427678166,
                     51.48805581959782
                  ],
                  [
                     6.611113809508885,
                     51.488098015231465
                  ],
                  [
                     6.611134647579045,
                     51.48810916885118
                  ],
                  [
                     6.611239419362668,
                     51.48817282875964
                  ],
                  [
                     6.611496459896975,
                     51.48832901562914
                  ],
                  [
                     6.611968681450547,
                     51.488076997396625
                  ],
                  [
                     6.612025430034835,
                     51.488048451435574
                  ],
                  [
                     6.612193997062669,
                     51.48810847779681
                  ],
                  [
                     6.612550728344718,
                     51.48817361798732
                  ],
                  [
                     6.612921590335313,
                     51.48822097560314
                  ],
                  [
                     6.613324821641406,
                     51.4882300314358
                  ],
                  [
                     6.613439240764865,
                     51.48834159781371
                  ],
                  [
                     6.613437504185641,
                     51.48850719036881
                  ],
                  [
                     6.613440658295353,
                     51.488542659846374
                  ],
                  [
                     6.613501696293587,
                     51.488928518418234
                  ],
                  [
                     6.613502718977611,
                     51.48948109169139
                  ],
                  [
                     6.613502641019767,
                     51.49080132223798
                  ],
                  [
                     6.613503705641671,
                     51.491788985208366
                  ],
                  [
                     6.613430638736576,
                     51.4920494477098
                  ],
                  [
                     6.613041737460427,
                     51.49342606745728
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
