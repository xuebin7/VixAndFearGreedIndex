let statData = [
  {
    date: "2024-07-25", fearGreedValue: 65.74285714285715, rating: "greed", vix: 15.41, sp500NetValue: 1.3229
  },
  {
    date: "2024-07-26", fearGreedValue: 70.74285714285713, rating: "greed", vix: 15.37, sp500NetValue: 1.3308
  },
  {
    date: "2024-07-27", fearGreedValue: 67.31428571428572, rating: "greed", vix: 16.96, sp500NetValue: 1.3244
  },
  {
    date: "2024-07-30", fearGreedValue: 73.6857142857143, rating: "greed", vix: 16.73, sp500NetValue: 1.3292
  },
  {
    date: "2024-08-01" , fearGreedValue: 70.31428571428572, rating: "greed", vix: 19.26
  },
  {
    date: "2024-08-02" , fearGreedValue: 70.57142857142857, rating: "greed", vix: 18.9
  },
  {
    date: "2024-08-03" , fearGreedValue: 69.42857142857143, rating: "greed", vix: 20.49
  },
  {
    date: "2024-08-04" , fearGreedValue: 71.4, rating: "greed", vix: 19.21
  },
  {
    date: "2024-08-07" , fearGreedValue: 70.82857142857144, rating: "greed", vix: 22.64
  },
  {
    date: "2024-08-08" , fearGreedValue: 71.17142857142856, rating: "greed", vix: 21.42, sp500NetValue: 1.3388
  },
  {
    date: "2024-08-09" , fearGreedValue: 71.14285714285715, rating: "greed", vix: 20.86, sp500NetValue: 1.3453
  },
  {
    date: "2024-08-10", fearGreedValue: 70.28571428571429, rating: "greed", vix: 20.93, sp500NetValue: 1.3462
  },
  {
    date: "2024-08-11", fearGreedValue: 71.65714285714286, rating: "greed", vix: 20.46, sp500NetValue: 1.3537
  },
  {
    date: "2024-08-14", fearGreedValue: 74.22857142857143, rating: "greed", vix: 19.7, sp500NetValue: 1.3634
  },
  {
    date: "2024-08-15", fearGreedValue: 71.14285714285715, rating: "greed", vix: 20.64, sp500NetValue: 1.3557
  },
  {
    date: "2024-08-16", fearGreedValue: 69.02857142857142, rating: "greed", vix: 19.58, sp500NetValue: 1.3685
  },
  {
    date: "2024-08-17", fearGreedValue: 68.57142857142857, rating: "greed", vix: 19.11, sp500NetValue: 1.3688
  },
  {
    date: "2024-08-18", fearGreedValue: 72.42857142857143, rating: "greed", vix: 18.03, sp500NetValue: 1.3751
  },
  {
    date: "2024-08-21", fearGreedValue: 69.8, rating: "greed", vix: 18.37, sp500NetValue: 1.3674
  },
  {
    date: "2024-08-22", fearGreedValue: 70.37142857142858, rating: "greed", vix: 18.2, sp500NetValue: 1.3716
  },
  {
    date: "2024-08-23", fearGreedValue: 63.199999999999996, rating: "greed", vix: 19.24, sp500NetValue: 1.3599
  },
  {
    date: "2024-08-24", fearGreedValue: 62.94285714285714, rating: "greed", vix: 19.08, sp500NetValue: 1.3636
  },
  {
    date: "2024-08-25", fearGreedValue: 58.74285714285715, rating: "greed", vix: 20.33, sp500NetValue: 1.3597
  },
  {
    date: "2024-08-28", fearGreedValue: 60.85714285714287, rating: "greed", vix: 19.8, sp500NetValue: 1.3671
  },
  {
    date: "2024-08-29", fearGreedValue: 60.057142857142864, rating: "greed", vix: 19.34, sp500NetValue: 1.369
  },
  {
    date: "2024-08-30", fearGreedValue: 57.2, rating: "greed", vix: 20.35, sp500NetValue: 1.3666
  },
  {
    date: "2024-09-01" , fearGreedValue: 40.45714285714286, rating: "fear", vix: 23.16, sp500NetValue: 1.3395
  },
  {
    date: "2024-09-01" , fearGreedValue: 50.48571428571429, rating: "neutral", vix: 21.88, sp500NetValue: 1.3429
  },
  {
    date: "2024-09-04" , fearGreedValue: 42.42857142857143, rating: "fear", vix: 21.98, sp500NetValue: 1.3405
  },
  {
    date: "2024-09-05" , fearGreedValue: 43.54285714285715, rating: "fear", vix: 20.49, sp500NetValue: 1.3526
  },
  {
    date: "2024-09-06" , fearGreedValue: 44, rating: "fear", vix: 16.27, sp500NetValue: 1.384
  },
  {
    date: "2024-09-07" , fearGreedValue: 59.05714285714286, rating: "greed", vix: 15.2, sp500NetValue: 1.4066
  },
  {
    date: "2024-09-08" , fearGreedValue: 59.42857142857144, rating: "greed", vix: 14.94, sp500NetValue: 1.4073
  },
  {
    date: "2024-09-11", fearGreedValue: 66.6, rating: "greed", vix: 14.97, sp500NetValue: 1.4147
  },
  {
    date: "2024-09-12", fearGreedValue: 66.71428571428571, rating: "greed", vix: 14.71, sp500NetValue: 1.4133
  },
  {
    date: "2024-09-13", fearGreedValue: 66.31428571428572, rating: "greed", vix: 14.02, sp500NetValue: 1.4148
  },
  {
    date: "2024-09-14", fearGreedValue: 60.314285714285724, rating: "greed", vix: 14.31, sp500NetValue: 1.4069
  },
  {
    date: "2024-09-15", fearGreedValue: 51.199999999999996, rating: "neutral", vix: 16.14, sp500NetValue: 1.3902
  },
  {
    date: "2024-09-18", fearGreedValue: 50.285714285714285, rating: "neutral", vix: 15.58, sp500NetValue: 1.3932
  },
  {
    date: "2024-09-19", fearGreedValue: 49.51428571428572, rating: "neutral", vix: 16.35, sp500NetValue: 1.3989
  },
  {
    date: "2024-09-20", fearGreedValue: 49.51428571428572, rating: "neutral", vix: 17.16, sp500NetValue: 1.3994
  },
  {
    date: "2024-09-21", fearGreedValue: 56.60000000000001, rating: "greed", vix: 16.87, sp500NetValue: 1.4062
  },
  {
    date: "2024-09-22", fearGreedValue: 60.71428571428572, rating: "greed", vix: 15.24, sp500NetValue: 1.4103
  },
  {
    date: "2024-09-25", fearGreedValue: 62.88571428571429, rating: "greed", vix: 14.6, sp500NetValue: 1.4136
  },
  {
    date: "2024-09-26", fearGreedValue: 65.91428571428573, rating: "greed", vix: 14.1, sp500NetValue: 1.421
  },
  {
    date: "2024-09-27", fearGreedValue: 64.4, rating: "greed", vix: 14.1, sp500NetValue: 1.4173
  },
  {
    date: "2024-09-29", fearGreedValue: 65, rating: "greed", vix: 13.51, sp500NetValue: 1.4226
  },
  {
    date: "2024-010-02" , fearGreedValue: 65.31428571428572, rating: "greed", vix: 13.34, sp500NetValue: 1.4253
  },
  {
    date: "2024-010-03" , fearGreedValue: 59.57142857142858, rating: "greed", vix: 13.3, sp500NetValue: 1.4283
  },
  {
    date: "2024-010-04" , fearGreedValue: 57.48571428571429, rating: "greed", vix: 13.45, sp500NetValue: 1.435
  },
  {
    date: "2024-010-05" , fearGreedValue: 54.91428571428572, rating: "neutral", vix: 13.54, sp500NetValue: 1.4317
  },
  {
    date: "2024-010-06" , fearGreedValue: 52.142857142857146, rating: "neutral", vix: 12.77, sp500NetValue: 1.4345
  },
  {
    date: "2024-010-09" , fearGreedValue: 49.25714285714287, rating: "neutral", vix: 14.19, sp500NetValue: 1.4269
  },
  {
    date: "2024-010-10", fearGreedValue: 46.971428571428575, rating: "neutral", vix: 14.18, sp500NetValue: 1.4234
  },
  {
    date: "2024-010-11", fearGreedValue: 49.2, rating: "neutral", vix: 13.58, sp500NetValue: 1.4336
  },
  {
    date: "2024-010-12", fearGreedValue: 47.114285714285714, rating: "neutral", vix: 13.92, sp500NetValue: 1.4265
  },
  {
    date: "2024-010-13", fearGreedValue: 49.114285714285714, rating: "neutral", vix: 13.81, sp500NetValue: 1.427
  },
  {
    date: "2024-010-16", fearGreedValue: 56.057142857142864, rating: "greed", vix: 14.69, sp500NetValue: 1.4322
  },
  {
    date: "2024-010-17", fearGreedValue: 51.4, rating: "neutral", vix: 15.87, sp500NetValue: 1.4274
  },
  {
    date: "2024-010-18", fearGreedValue: 33.12857142857143, rating: "fear", vix: 27.62, sp500NetValue: 1.3875
  },
  {
    date: "2024-010-19", fearGreedValue: 19.514285714285716, rating: "extreme fear", vix: 24.09, sp500NetValue: 1.3871
  },
  {
    date: "2024-010-20", fearGreedValue: 27.600000000000005, rating: "fear", vix: 18.36, sp500NetValue: 1.401
  },
  {
    date: "2024-010-23", fearGreedValue: 30.142857142857146, rating: "fear", vix: 16.78, sp500NetValue: 1.4105
  },
  {
    date: "2024-010-24", fearGreedValue: 34.51428571428571, rating: "fear", vix: 14.27, sp500NetValue: 1.4254
  },
  {
    date: "2024-010-26", fearGreedValue: 34.17142857142857, rating: "fear", vix: 14.73, sp500NetValue: 1.4253
  },
  {
    date: "2024-010-27", fearGreedValue: 33.82857142857143, rating: "fear", vix: 15.95, sp500NetValue: 1.4102
  },
  {
    date: "2024-010-30", fearGreedValue: 28.6, rating: "fear", vix: 17.4, sp500NetValue: 1.3959
  },
  {
    date: "2024-11-01" , fearGreedValue: 26.314285714285713, rating: "fear", vix: 17.35, sp500NetValue: 1.3898
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 24.314285714285717, rating: "extreme fear", vix: 17.93, sp500NetValue: 1.3869
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 28.885714285714283, rating: "fear", vix: 16.13, sp500NetValue: 1.4033
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 33.77142857142857, rating: "fear", vix: 16.04, sp500NetValue: 1.411
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 34.31428571428572, rating: "fear", vix: 17.82, sp500NetValue: 1.3963
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 31.914285714285718, rating: "fear", vix: 17.7, sp500NetValue: 1.3983
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 25.62857142857143, rating: "fear", vix: 19.54, sp500NetValue: 1.3788
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 25.34285714285715, rating: "fear", vix: 19.19, sp500NetValue: 1.3803
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 25.142857142857142, rating: "fear", vix: 18.71, sp500NetValue: 1.381
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 27.428571428571427, rating: "fear", vix: 16.12, sp500NetValue: 1.4054
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 27.342857142857145, rating: "fear", vix: 16.6, sp500NetValue: 1.4019
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 36.02857142857143, rating: "fear", vix: 15.97, sp500NetValue: 1.4155
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 39.91428571428572, rating: "fear", vix: 15.06, sp500NetValue: 1.4231
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 41.62857142857143, rating: "fear", vix: 15.1, sp500NetValue: 1.4318
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 43.68571428571429, rating: "fear", vix: 15.02, sp500NetValue: 1.4391
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 45.800000000000004, rating: "neutral", vix: 14.85, sp500NetValue: 1.4353
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 37.971428571428575, rating: "fear", vix: 17.9, sp500NetValue: 1.4144
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 40.62857142857143, rating: "fear", vix: 16.41
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 42.4, rating: "fear", vix: 16.56
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 45.91428571428571, rating: "neutral", vix: 15.84
  },
  {
    date: "NaN-0NaN-NaN", fearGreedValue: 43.771428571428565, rating: "fear", vix: 16.43
  },
  {
    date: "2025-00-03" , fearGreedValue: 37.4, rating: "fear", vix: 18.62
  },
  {
    date: "2025-00-04" , fearGreedValue: 37.142857142857146, rating: "fear", vix: 17.21
  },
  {
    date: "2025-00-05" , fearGreedValue: 38.62857142857143, rating: "fear", vix: 15.77, sp500NetValue: 1.426
  },
  {
    date: "2025-00-06" , fearGreedValue: 39.68571428571429, rating: "fear", vix: 15.5, sp500NetValue: 1.4311
  },
  {
    date: "2025-00-07" , fearGreedValue: 38.371428571428574, rating: "fear", vix: 16.54, sp500NetValue: 1.418
  },
  {
    date: "2025-00-10", fearGreedValue: 44.714285714285715, rating: "fear", vix: 15.81, sp500NetValue: 1.4275
  },
  {
    date: "2025-00-11", fearGreedValue: 45.4, rating: "neutral", vix: 16.02, sp500NetValue: 1.428
  },
  {
    date: "2025-00-12", fearGreedValue: 41.371428571428574, rating: "fear", vix: 15.89, sp500NetValue: 1.425
  },
  {
    date: "2025-00-13", fearGreedValue: 46.60000000000001, rating: "neutral", vix: 15.1, sp500NetValue: 1.4394
  },
  {
    date: "2025-00-14", fearGreedValue: 43.68571428571429, rating: "fear", vix: 14.77, sp500NetValue: 1.4395
  },
  {
    date: "2025-00-18", fearGreedValue: 46.800000000000004, rating: "neutral", vix: 15.35, sp500NetValue: 1.4422
  },
  {
    date: "2025-00-19", fearGreedValue: 47.628571428571426, rating: "neutral", vix: 15.27, sp500NetValue: 1.4456
  },
  {
    date: "2025-00-20", fearGreedValue: 44.228571428571435, rating: "fear", vix: 15.66, sp500NetValue: 1.4399
  },
  {
    date: "2025-00-21", fearGreedValue: 36.971428571428575, rating: "fear", vix: 18.21, sp500NetValue: 1.4164
  },
  {
    date: "2025-00-24", fearGreedValue: 29.542857142857144, rating: "fear", vix: 18.98, sp500NetValue: 1.41
  },
  {
    date: "2025-00-25", fearGreedValue: 24.199999999999996, rating: "extreme fear", vix: 19.43, sp500NetValue: 1.4038
  },
  {
    date: "2025-00-26", fearGreedValue: 21.25714285714286, rating: "extreme fear", vix: 19.1, sp500NetValue: 1.404
  },
  {
    date: "2025-00-27", fearGreedValue: 12.757142857142858, rating: "extreme fear", vix: 21.13, sp500NetValue: 1.383
  },
  {
    date: "2025-00-28", fearGreedValue: 20.657142857142855, rating: "extreme fear", vix: 19.63, sp500NetValue: 1.4035
  },
  {
    date: "2025-01-03" , fearGreedValue: 12.342857142857143, rating: "extreme fear", vix: 22.78, sp500NetValue: 1.3803
  },
  {
    date: "2025-01-04" , fearGreedValue: 11.042857142857143, rating: "extreme fear", vix: 23.51, sp500NetValue: 1.3649
  },
  {
    date: "2025-01-05" , fearGreedValue: 11.514285714285714, rating: "extreme fear", vix: 21.93, sp500NetValue: 1.3786
  },
  {
    date: "2025-01-06" , fearGreedValue: 17.2, rating: "extreme fear", vix: 24.87, sp500NetValue: 1.3552
  },
  {
    date: "2025-01-07" , fearGreedValue: 17.642857142857146, rating: "extreme fear", vix: 23.37, sp500NetValue: 1.3625
  },
  {
    date: "2025-01-10", fearGreedValue: 17.071428571428573, rating: "extreme fear", vix: 27.86, sp500NetValue: 1.3284
  },
  {
    date: "2025-01-11", fearGreedValue: 15.114285714285716, rating: "extreme fear", vix: 26.92, sp500NetValue: 1.3193
  },
  {
    date: "2025-01-12", fearGreedValue: 15.914285714285715, rating: "extreme fear", vix: 24.23, sp500NetValue: 1.3248
  },
  {
    date: "2025-01-13", fearGreedValue: 15.185714285714287, rating: "extreme fear", vix: 24.66, sp500NetValue: 1.3076
  },
  {
    date: "2025-01-14", fearGreedValue: 22.057142857142857, rating: "extreme fear", vix: 21.77, sp500NetValue: 1.3344
  },
  {
    date: "2025-01-17", fearGreedValue: 22.571428571428573, rating: "extreme fear", vix: 20.51, sp500NetValue: 1.3414
  },
  {
    date: "2025-01-18", fearGreedValue: 22.228571428571428, rating: "extreme fear", vix: 21.7, sp500NetValue: 1.3283
  },
  {
    date: "2025-01-19", fearGreedValue: 21.599999999999998, rating: "extreme fear", vix: 19.9, sp500NetValue: 1.3413
  },
  {
    date: "2025-01-20", fearGreedValue: 21.685714285714287, rating: "extreme fear", vix: 19.8, sp500NetValue: 1.3397
  },
  {
    date: "2025-01-21", fearGreedValue: 22.685714285714287, rating: "extreme fear", vix: 19.28, sp500NetValue: 1.3412
  },
  {
    date: "2025-01-24", fearGreedValue: 25.400000000000002, rating: "fear", vix: 17.48, sp500NetValue: 1.3638
  },
  {
    date: "2025-01-25", fearGreedValue: 29.285714285714285, rating: "fear", vix: 17.15, sp500NetValue: 1.3659
  },
  {
    date: "2025-01-26", fearGreedValue: 28.88571428571429, rating: "fear", vix: 18.33, sp500NetValue: 1.3509
  },
  {
    date: "2025-01-27", fearGreedValue: 28.342857142857145, rating: "fear", vix: 18.69, sp500NetValue: 1.3469
  },
  {
    date: "2025-01-28", fearGreedValue: 26.371428571428574, rating: "fear", vix: 21.65, sp500NetValue: 1.3216
  },
  {
    date: "2025-02-03" , fearGreedValue: 21.114285714285717, rating: "extreme fear", vix: 22.28, sp500NetValue: 1.3289
  },
  {
    date: "2025-02-01" , fearGreedValue: 19.571428571428573, rating: "extreme fear", vix: 21.77, sp500NetValue: 1.3336
  },
  {
    date: "2025-02-02" , fearGreedValue: 22.599999999999998, rating: "extreme fear", vix: 21.51, sp500NetValue: 1.3424
  },
  {
    date: "2025-02-03" , fearGreedValue: 12.142857142857142, rating: "extreme fear", vix: 30.02, sp500NetValue: 1.2828
  },
  {
    date: "2025-02-04" , fearGreedValue: 5.385714285714286, rating: "extreme fear", vix: 45.31
  },
  {
    date: "2025-02-07" , fearGreedValue: 4, rating: "extreme fear", vix: 46.98, sp500NetValue: 1.2105
  },
  {
    date: "2025-02-08" , fearGreedValue: 2.9, rating: "extreme fear", vix: 52.33, sp500NetValue: 1.194
  },
  {
    date: "2025-02-09" , fearGreedValue: 9.5, rating: "extreme fear", vix: 33.62, sp500NetValue: 1.3013
  },
  {
    date: "2025-02-10", fearGreedValue: 5.614285714285715, rating: "extreme fear", vix: 40.72, sp500NetValue: 1.2595
  },
  {
    date: "2025-02-11", fearGreedValue: 8.385714285714286, rating: "extreme fear", vix: 37.56, sp500NetValue: 1.281
  },
  {
    date: "2025-02-14", fearGreedValue: 12.342857142857143, rating: "extreme fear", vix: 30.89, sp500NetValue: 1.291
  },
  {
    date: "2025-02-15", fearGreedValue: 13.114285714285716, rating: "extreme fear", vix: 30.12, sp500NetValue: 1.2887
  },
  {
    date: "2025-02-16", fearGreedValue: 11.142857142857142, rating: "extreme fear", vix: 32.64, sp500NetValue: 1.2617
  },
  {
    date: "2025-02-17", fearGreedValue: 16.057142857142857, rating: "extreme fear", vix: 29.65, sp500NetValue: 1.2626
  },
  {
    date: "2025-02-21", fearGreedValue: 12.371428571428572, rating: "extreme fear", vix: 33.82, sp500NetValue: 1.2341
  },
  {
    date: "2025-02-22", fearGreedValue: 13.600000000000003, rating: "extreme fear", vix: 30.57, sp500NetValue: 1.2643
  },
  {
    date: "2025-02-23", fearGreedValue: 21.542857142857144, rating: "extreme fear", vix: 28.45, sp500NetValue: 1.2847
  },
  {
    date: "2025-02-24", fearGreedValue: 24.08571428571429, rating: "extreme fear", vix: 26.47, sp500NetValue: 1.3089
  },
  {
    date: "2025-02-25", fearGreedValue: 34.51428571428572, rating: "fear", vix: 24.84, sp500NetValue: 1.3173
  },
  {
    date: "2025-02-28", fearGreedValue: 32.142857142857146, rating: "fear", vix: 25.15, sp500NetValue: 1.3177
  },
  {
    date: "2025-02-29", fearGreedValue: 32.74285714285714, rating: "fear", vix: 24.17, sp500NetValue: 1.3246
  },
  {
    date: "2025-02-30", fearGreedValue: 32.371428571428574, rating: "fear", vix: 24.7, sp500NetValue: 1.3262
  },
  {
    date: "2025-03-01" , fearGreedValue: 41.25714285714287, rating: "fear", vix: 24.6
  },
  {
    date: "2025-03-02" , fearGreedValue: 38.28571428571429, rating: "fear", vix: 22.68
  },
  {
    date: "2025-03-05" , fearGreedValue: 53.057142857142864, rating: "neutral", vix: 23.64
  },
  {
    date: "2025-03-06" , fearGreedValue: 54.65714285714286, rating: "neutral", vix: 24.76, sp500NetValue: 1.3346
  },
  {
    date: "2025-03-07" , fearGreedValue: 54.142857142857146, rating: "neutral", vix: 23.55, sp500NetValue: 1.34
  },
  {
    date: "2025-03-08" , fearGreedValue: 57.65714285714286, rating: "greed", vix: 22.48, sp500NetValue: 1.3485
  },
  {
    date: "2025-03-09" , fearGreedValue: 60.02857142857143, rating: "greed", vix: 21.9, sp500NetValue: 1.3482
  },
  {
    date: "2025-03-12", fearGreedValue: 64.4857142857143, rating: "greed", vix: 18.39, sp500NetValue: 1.3888
  },
  {
    date: "2025-03-13", fearGreedValue: 68.2, rating: "greed", vix: 18.22, sp500NetValue: 1.3973
  },
  {
    date: "2025-03-14", fearGreedValue: 70.4, rating: "greed", vix: 18.62, sp500NetValue: 1.3984
  },
  {
    date: "2025-03-15", fearGreedValue: 69.14285714285714, rating: "greed", vix: 17.83, sp500NetValue: 1.4038
  },
  {
    date: "2025-03-16", fearGreedValue: 70.60000000000001, rating: "greed", vix: 17.24, sp500NetValue: 1.4127
  },
  {
    date: "2025-03-19", fearGreedValue: 69.74285714285715, rating: "greed", vix: 18.14, sp500NetValue: 1.4136
  },
  {
    date: "2025-03-20", fearGreedValue: 69.17142857142858, rating: "greed", vix: 18.09, sp500NetValue: 1.4086
  },
  {
    date: "2025-03-21", fearGreedValue: 66.22857142857143, rating: "greed", vix: 20.87, sp500NetValue: 1.3873
  },
  {
    date: "2025-03-22", fearGreedValue: 66.8, rating: "greed", vix: 20.28, sp500NetValue: 1.3861
  },
  {
    date: "2025-03-23", fearGreedValue: 64.08571428571429, rating: "greed", vix: 22.29, sp500NetValue: 1.3776
  },
  {
    date: "2025-03-27", fearGreedValue: 65.74285714285715, rating: "greed", vix: 18.96, sp500NetValue: 1.4034
  },
  {
    date: "2025-03-28", fearGreedValue: 64.74285714285715, rating: "greed", vix: 19.31, sp500NetValue: 1.3965
  },
  {
    date: "2025-03-29", fearGreedValue: 64.45714285714287, rating: "greed", vix: 19.18, sp500NetValue: 1.4019
  },
  {
    date: "2025-03-30", fearGreedValue: 61.91428571428571, rating: "greed", vix: 18.57, sp500NetValue: 1.4007
  },
  {
    date: "2025-04-02" , fearGreedValue: 62.42857142857144, rating: "greed", vix: 18.36
  },
  {
    date: "2025-04-03" , fearGreedValue: 54.57142857142857, rating: "neutral", vix: 17.69, sp500NetValue: 1.4141
  },
  {
    date: "2025-04-04" , fearGreedValue: 54.88571428571429, rating: "neutral", vix: 17.61, sp500NetValue: 1.4146
  },
  {
    date: "2025-04-05" , fearGreedValue: 57.97142857142858, rating: "greed", vix: 18.48, sp500NetValue: 1.4073
  },
  {
    date: "2025-04-06" , fearGreedValue: 61.77142857142858, rating: "greed", vix: 16.77, sp500NetValue: 1.4205
  },
  {
    date: "2025-04-09" , fearGreedValue: 63.42857142857143, rating: "greed", vix: 17.16, sp500NetValue: 1.4219
  },
  {
    date: "2025-04-10", fearGreedValue: 64, rating: "greed", vix: 16.95, sp500NetValue: 1.4291
  },
  {
    date: "2025-04-11", fearGreedValue: 64.2, rating: "greed", vix: 17.26, sp500NetValue: 1.425
  },
  {
    date: "2025-04-12", fearGreedValue: 64.6, rating: "greed", vix: 18.02, sp500NetValue: 1.4299
  },
  {
    date: "2025-04-13", fearGreedValue: 59.54285714285715, rating: "greed", vix: 20.82, sp500NetValue: 1.4142
  },
  {
    date: "2025-04-16", fearGreedValue: 61.114285714285714, rating: "greed", vix: 19.11, sp500NetValue: 1.427
  },
  {
    date: "2025-04-17", fearGreedValue: 57.42857142857144, rating: "greed", vix: 21.6, sp500NetValue: 1.4149
  },
  {
    date: "2025-04-18", fearGreedValue: 54.285714285714285, rating: "neutral", vix: 20.14, sp500NetValue: 1.4149
  },
  {
    date: "2025-04-20", fearGreedValue: 54.51428571428573, rating: "neutral", vix: 20.62, sp500NetValue: 1.4108
  },
  {
    date: "2025-04-23", fearGreedValue: 56.60000000000001, rating: "greed", vix: 19.83, sp500NetValue: 1.4236
  },
  {
    date: "2025-04-24", fearGreedValue: 57.885714285714286, rating: "greed", vix: 17.48, sp500NetValue: 1.4375
  },
  {
    date: "2025-04-25", fearGreedValue: 59.25714285714286, rating: "greed", vix: 16.76, sp500NetValue: 1.4377
  },
  {
    date: "2025-04-26", fearGreedValue: 63.00000000000001, rating: "greed", vix: 16.59, sp500NetValue: 1.4474
  },
  {
    date: "2025-04-27", fearGreedValue: 64.8, rating: "greed", vix: 16.32, sp500NetValue: 1.4546
  },
  {
    date: "2025-04-30", fearGreedValue: 69.22857142857143, rating: "greed", vix: 16.73, sp500NetValue: 1.4607
  },
  {
    date: "2025-05-01" , fearGreedValue: 67.54285714285714, rating: "greed", vix: 16.83, sp500NetValue: 1.4583
  },
  {
    date: "2025-05-02" , fearGreedValue: 63.714285714285715, rating: "greed", vix: 16.64, sp500NetValue: 1.4649
  },
  {
    date: "2025-05-03" , fearGreedValue: 77.62857142857145, rating: "extreme greed", vix: 16.38, sp500NetValue: 1.4759
  },
  {
    date: "2025-05-07" , fearGreedValue: 75.08571428571429, rating: "extreme greed", vix: 17.79, sp500NetValue: 1.4647
  },
  {
    date: "2025-05-08" , fearGreedValue: 74.62857142857142, rating: "greed", vix: 16.81, sp500NetValue: 1.4643
  },
  {
    date: "2025-05-09" , fearGreedValue: 75.91428571428571, rating: "extreme greed", vix: 15.94, sp500NetValue: 1.4726
  },
  {
    date: "2025-05-10", fearGreedValue: 76.97142857142856, rating: "extreme greed", vix: 15.78, sp500NetValue: 1.4759
  },
  {
    date: "2025-05-11", fearGreedValue: 75.25714285714285, rating: "extreme greed", vix: 16.4, sp500NetValue: 1.4707
  },
  {
    date: "2025-05-14", fearGreedValue: 76.11428571428573, rating: "extreme greed", vix: 17.2, sp500NetValue: 1.4726
  },
  {
    date: "2025-05-15", fearGreedValue: 73.4857142857143, rating: "greed", vix: 17.38, sp500NetValue: 1.4676
  },
  {
    date: "2025-05-16", fearGreedValue: 72.94285714285715, rating: "greed", vix: 17.16, sp500NetValue: 1.4723
  },
  {
    date: "2025-05-17", fearGreedValue: 74.17142857142858, rating: "greed", vix: 16.52, sp500NetValue: 1.4782
  },
  {
    date: "2025-05-18", fearGreedValue: 73.94285714285715, rating: "greed", vix: 16.41, sp500NetValue: 1.4787
  },
  {
    date: "2025-05-21", fearGreedValue: 73.28571428571429, rating: "greed", vix: 16.65, sp500NetValue: 1.4811
  },
  {
    date: "2025-05-22", fearGreedValue: 73.88571428571429, rating: "greed", vix: 16.5, sp500NetValue: 1.4808
  },
  {
    date: "2025-05-23", fearGreedValue: 76.3714285714286, rating: "extreme greed", vix: 15.37, sp500NetValue: 1.4902
  },
  {
    date: "2025-05-24", fearGreedValue: 75.25714285714287, rating: "extreme greed", vix: 15.39, sp500NetValue: 1.4907
  },
  {
    date: "2025-05-25", fearGreedValue: 74.65714285714286, rating: "greed", vix: 14.93, sp500NetValue: 1.4966
  },
  {
    date: "2025-05-28", fearGreedValue: 73.8, rating: "greed", vix: 15.03, sp500NetValue: 1.4979
  },
  {
    date: "2025-05-29", fearGreedValue: 70.62857142857143, rating: "greed", vix: 15.98, sp500NetValue: 1.4946
  },
  {
    date: "2025-05-30", fearGreedValue: 68.02857142857142, rating: "greed", vix: 15.48, sp500NetValue: 1.4916
  },
  {
    date: "2025-06-01" , fearGreedValue: 63.714285714285715, rating: "greed", vix: 16.72, sp500NetValue: 1.4879
  },
  {
    date: "2025-06-01" , fearGreedValue: 49.800000000000004, rating: "neutral", vix: 20.38, sp500NetValue: 1.4663
  },
  {
    date: "2025-06-04" , fearGreedValue: 56.885714285714286, rating: "greed", vix: 17.52, sp500NetValue: 1.4839
  },
  {
    date: "2025-06-05" , fearGreedValue: 55.028571428571425, rating: "greed", vix: 17.85, sp500NetValue: 1.4768
  },
  {
    date: "2025-06-06" , fearGreedValue: 55.314285714285724, rating: "greed", vix: 16.77, sp500NetValue: 1.4875
  },
  {
    date: "2025-06-07" , fearGreedValue: 54.71428571428572, rating: "neutral", vix: 16.57, sp500NetValue: 1.4853
  },
  {
    date: "2025-06-08" , fearGreedValue: 58.37142857142857, rating: "greed", vix: 15.15, sp500NetValue: 1.4973
  },
  {
    date: "2025-06-11", fearGreedValue: 57.628571428571426, rating: "greed", vix: 16.25, sp500NetValue: 1.4944
  },
  {
    date: "2025-06-12", fearGreedValue: 62.25714285714286, rating: "greed", vix: 14.73, sp500NetValue: 1.5099
  },
  {
    date: "2025-06-13", fearGreedValue: 63.34285714285714, rating: "greed", vix: 14.49, sp500NetValue: 1.5128
  },
  {
    date: "2025-06-14", fearGreedValue: 63.25714285714287, rating: "greed", vix: 14.83, sp500NetValue: 1.5128
  },
  {
    date: "2025-06-15", fearGreedValue: 63.54285714285715, rating: "greed", vix: 15.09, sp500NetValue: 1.5097
  },
  {
    date: "2025-06-18", fearGreedValue: 64.2, rating: "greed", vix: 14.99, sp500NetValue: 1.5085
  },
  {
    date: "2025-06-19", fearGreedValue: 59.88571428571429, rating: "greed", vix: 15.57, sp500NetValue: 1.5013
  },
  {
    date: "2025-06-20", fearGreedValue: 55.91428571428572, rating: "greed", vix: 15.69, sp500NetValue: 1.4982
  },
  {
    date: "2025-06-21", fearGreedValue: 55.1142857142857, rating: "greed", vix: 16.6, sp500NetValue: 1.4907
  },
  {
    date: "2025-06-22", fearGreedValue: 61.6571428571429, rating: "greed", vix: 14.22, sp500NetValue: 1.5125
  },
  {
    date: "2025-06-25", fearGreedValue: 58.4285714285714, rating: "greed", vix: 14.79, sp500NetValue: 1.5034
  },
  {
    date: "2025-06-26", fearGreedValue: 60.8571428571429, rating: "greed", vix: 14.62, sp500NetValue: 1.5093
  },
  {
    date: "2025-06-27", fearGreedValue: 64.8857142857143, rating: "greed", vix: 14.85, sp500NetValue: 1.511
  },
  {
    date: "2025-06-28", fearGreedValue: 65.6857142857143, rating: "greed", vix: 14.43, sp500NetValue: 1.5145
  },
  {
    date: "2025-06-29", fearGreedValue: 60.8952380952381, rating: "greed", vix: 15.36, sp500NetValue: 1.5048
  },
  {
    date: "2025-07-02" , fearGreedValue: 52.2, rating: "neutral", vix: 17.17, sp500NetValue: 1.4963
  },
  {
    date: "2025-07-03" , fearGreedValue: 51.6, rating: "neutral", vix: 16.35, sp500NetValue: 1.5043
  },
  {
    date: "2025-07-04" , fearGreedValue: 55.5428571428571, rating: "greed", vix: 15.3, sp500NetValue: 1.5148
  },
  {
    date: "2025-07-05" , fearGreedValue: 53.0857142857143, rating: "neutral", vix: 15.18, sp500NetValue: 1.5109
  },
  {
    date: "2025-07-08" , fearGreedValue: 50.2285714285714, rating: "neutral", vix: 15.11, sp500NetValue: 1.5133
  },
  {
    date: "2025-07-09" , fearGreedValue: 51.0571428571429, rating: "neutral", vix: 15.04, sp500NetValue: 1.5168
  },
  {
    date: "2025-07-10", fearGreedValue: 49.8571428571429, rating: "neutral", vix: 15.35, sp500NetValue: 1.522
  },
  {
    date: "2025-07-11", fearGreedValue: 54.5428571428571, rating: "neutral", vix: 14.71, sp500NetValue: 1.5329
  },
  {
    date: "2025-07-12", fearGreedValue: 54.4, rating: "neutral", vix: 14.76, sp500NetValue: 1.5323
  },
  {
    date: "2025-07-15", fearGreedValue: 58.3142857142857, rating: "greed", vix: 15.69, sp500NetValue: 1.5399
  },
  {
    date: "2025-07-16", fearGreedValue: 57.4571428571429, rating: "greed", vix: 16.36, sp500NetValue: 1.5375
  },
  {
    date: "2025-07-17", fearGreedValue: 58.4571428571429, rating: "greed", vix: 15.72, sp500NetValue: 1.5358
  },
  {
    date: "2025-07-18", fearGreedValue: 61.0571428571429, rating: "greed", vix: 15.7, sp500NetValue: 1.5435
  },
  {
    date: "2025-07-19", fearGreedValue: 62.2285714285714, rating: "greed", vix: 15.45, sp500NetValue: 1.5514
  },
  {
    date: "2025-07-22", fearGreedValue: 62.2857142857143, rating: "greed", vix: 16.1, sp500NetValue: 1.5574
  },
  {
    date: "2025-07-23", fearGreedValue: 58.4571428571429, rating: "greed", vix: 16.64, sp500NetValue: 1.5482
  },
  {
    date: "2025-09-24", fearGreedValue: 56.4285714285714, rating: "greed", vix: 16.18, sp500NetValue: 1.5448
  },
  {
    date: "2025-09-25", fearGreedValue: 56.4285714285714, rating: "greed", vix: 16.74, sp500NetValue: 1.5448
  }
];

const chartDom = document.getElementById("chart");
const myChart = echarts.init(chartDom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

function generateData() {
  let xData = [];
  let fearGreedValueData = [];
  let vixData = [];
  let sp500NetValueData = [];
  statData.forEach((x) => {
    let date = x["date"];
    let fearGreedValue = x["fearGreedValue"];
    let vix = x["vix"];
    let sp500NetValue = x["sp500NetValue"];

    // 将日期字符串转换为时间戳
    xData.push(date);
    fearGreedValueData.push(fearGreedValue);
    vixData.push(vix);
    sp500NetValueData.push(sp500NetValue);
  });
  return { xData, fearGreedValueData: fearGreedValueData, vixData: vixData, sp500NetValueData: sp500NetValueData }
}

const { xData, fearGreedValueData, vixData, sp500NetValueData } = generateData();

function getOption() {
  return {
    title: {
      text: "恐惧贪婪VS恐慌",
      textStyle: {
        fontSize: 18
      },
      top: 0,
      left: 'center'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
        type: 'cross', // 交叉轴线指示器，便于查看同一点的两个Y值
      },
      confine: true // 确保tooltip在容器内显示
    },
    legend: {
      data: ["CNN恐惧贪婪指数", "VIX恐慌指数"
        // , "S&P500"
      ], // 图例
      top: 30
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        fontSize: 12
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "CNN恐惧贪婪指数",
        type: "line",
        showSymbol: false,
        smooth: true,
        data: xData.map((date, index) => [date, fearGreedValueData[index]]),
        itemStyle: {
          color: '#0f84f98d',
        },
        lineStyle: {
          width: 1.5
        }
      },
      {
        name: "VIX恐慌指数",
        type: "line",
        showSymbol: false,
        smooth: true,
        data: xData.map((date, index) => [date, vixData[index]]),
        itemStyle: {
          color: 'rgba(52, 235, 70, 1)',
        },
        lineStyle: {
          width: 1.5
        }
      },
      // {
      //   name: "S&P500",
      //   type: "line",
      //   showSymbol: false,
      //   smooth: true,
      //   data: xData.map((date, index) => [date, sp500NetValueData[index]]),
      //   itemStyle: {
      //     color: '#ff0000a2',
      //   },
      //   lineStyle: {
      //     width: 1.5
      //   }
      // },
    ],
    dataZoom: [
      {
        type: 'inside', // 内置型，依靠鼠标滚轮或触摸手势进行缩放（无需滑动条）
        xAxisIndex: 0, // 缩放 xAxis 索引为 0 的坐标轴
        start: 0,       // 初始缩放范围的起始百分比（0% ~ 100%）
        end: 100        // 初始缩放范围的结束百分比（0% ~ 100%）
      },
      {
        type: 'slider', // 滑动条型
        xAxisIndex: 0,
        show: true,     // 默认显示滑动条dataZoom
        start: 0,
        end: 100,
        // 可以对dataZoom的滑动条进行样式、位置等配置
        bottom: '3%', // 滑动条距离容器底部的距离
        height: 35,
        textStyle: {
          fontSize: 12
        }
      }
    ]
  }
};

// 设置初始选项
myChart.setOption(getOption());

// 响应窗口大小变化
window.addEventListener('resize', function () {
  myChart.resize();
});

// 初始调整尺寸
myChart.resize();