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
                     6.63622440887013,
                     51.476197760104455
                  ],
                  [
                     6.639808447030195,
                     51.475678434710446
                  ],
                  [
                     6.640467252044165,
                     51.4755825534931
                  ],
                  [
                     6.64206132975966,
                     51.47534977029758
                  ],
                  [
                     6.643127811272718,
                     51.47519551468881
                  ],
                  [
                     6.645897705854637,
                     51.47488514318569
                  ],
                  [
                     6.648763391820331,
                     51.4690104465833
                  ],
                  [
                     6.648920245467941,
                     51.468679726082726
                  ],
                  [
                     6.649126444388177,
                     51.46824281010793
                  ],
                  [
                     6.64917619654338,
                     51.46813583618808
                  ],
                  [
                     6.650237941158887,
                     51.46588965641763
                  ],
                  [
                     6.651798431915747,
                     51.46266442025236
                  ],
                  [
                     6.651810233202627,
                     51.46264643162695
                  ],
                  [
                     6.652186518494635,
                     51.46186988367631
                  ],
                  [
                     6.652643837792938,
                     51.460929239006816
                  ],
                  [
                     6.653109242536783,
                     51.45996456246641
                  ],
                  [
                     6.653115700769893,
                     51.45995121505935
                  ],
                  [
                     6.653695524762733,
                     51.458854429833295
                  ],
                  [
                     6.654015946854226,
                     51.45824654908126
                  ],
                  [
                     6.654250746360344,
                     51.45780114162036
                  ],
                  [
                     6.654685340330346,
                     51.456976691874836
                  ],
                  [
                     6.654794912254096,
                     51.45672321704475
                  ],
                  [
                     6.655310501461851,
                     51.45553036461631
                  ],
                  [
                     6.65560144427641,
                     51.45485725026649
                  ],
                  [
                     6.655750079201131,
                     51.45451335013736
                  ],
                  [
                     6.655805736533085,
                     51.45438456773119
                  ],
                  [
                     6.656062435236942,
                     51.453790660917235
                  ],
                  [
                     6.656543804810203,
                     51.45267708211064
                  ],
                  [
                     6.656946591075825,
                     51.451787940899905
                  ],
                  [
                     6.657011956479574,
                     51.45163117081838
                  ],
                  [
                     6.657335204112803,
                     51.45084364223654
                  ],
                  [
                     6.657387316862442,
                     51.45074087645971
                  ],
                  [
                     6.657774867201844,
                     51.44985243393115
                  ],
                  [
                     6.653924907868048,
                     51.44992096933426
                  ],
                  [
                     6.653521803761938,
                     51.44992856545613
                  ],
                  [
                     6.653322193912903,
                     51.44992882476713
                  ],
                  [
                     6.653215895919285,
                     51.449929588388784
                  ],
                  [
                     6.652650559853256,
                     51.449933620606494
                  ],
                  [
                     6.651695973335226,
                     51.449938165322166
                  ],
                  [
                     6.651454072465648,
                     51.44993959367516
                  ],
                  [
                     6.650062000488618,
                     51.449947866691645
                  ],
                  [
                     6.649936159610692,
                     51.44994896107998
                  ],
                  [
                     6.647708828881582,
                     51.449960301925934
                  ],
                  [
                     6.647518381528524,
                     51.44996135441275
                  ],
                  [
                     6.646790121712647,
                     51.44996537620459
                  ],
                  [
                     6.645421974766872,
                     51.449976710270214
                  ],
                  [
                     6.643653567374136,
                     51.44999133591375
                  ],
                  [
                     6.642478414815917,
                     51.45000766420736
                  ],
                  [
                     6.642001835464825,
                     51.45001426699945
                  ],
                  [
                     6.641540892501713,
                     51.45095652660614
                  ],
                  [
                     6.641159414658238,
                     51.45201635810567
                  ],
                  [
                     6.640972273060328,
                     51.452531846870954
                  ],
                  [
                     6.640289101434616,
                     51.45442981067408
                  ],
                  [
                     6.639709512768636,
                     51.456047301316744
                  ],
                  [
                     6.639238058235622,
                     51.45735435978578
                  ],
                  [
                     6.638292148814099,
                     51.459984863185625
                  ],
                  [
                     6.637472678489941,
                     51.462407439211916
                  ],
                  [
                     6.636526473433031,
                     51.465076035540676
                  ],
                  [
                     6.636101463306149,
                     51.46692321241754
                  ],
                  [
                     6.635909537581544,
                     51.467759615839185
                  ],
                  [
                     6.635604949980917,
                     51.469086644874
                  ],
                  [
                     6.635314769029582,
                     51.470350719802845
                  ],
                  [
                     6.634665356151431,
                     51.47291851833077
                  ],
                  [
                     6.635030811135965,
                     51.47294977562293
                  ],
                  [
                     6.634537545644676,
                     51.47592899353695
                  ],
                  [
                     6.63481872682342,
                     51.47576518687297
                  ],
                  [
                     6.635994241781293,
                     51.4758139707554
                  ],
                  [
                     6.63622440887013,
                     51.476197760104455
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
