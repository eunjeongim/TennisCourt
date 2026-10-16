// 코트 데이터. type: public(공공) | private(사설). fit 레벨: ok | meh | no
// 1~4번은 직접 확인한 항목, 나머지는 2026-10-15 웹 조사 결과(sources 참고)
window.COURTS = [
  {
    "id": "mokdong",
    "name": "목동테니스장",
    "fav": true,
    "type": "public",
    "operator": "양천구시설관리공단",
    "address": "서울 양천구 목동동로 298",
    "lat": 37.52799,
    "lng": 126.87777,
    "transit": {
      "min": 15,
      "route": "5호선 영등포구청 → 오목교 (2정거장) + 도보 7분"
    },
    "tags": [
      "하드코트",
      "실외 10면",
      "실내 3면",
      "야간조명",
      "주차 무료(대관시간)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "22시까지 운영"
      ],
      "weekend": [
        "ok",
        "2시간 단위 예약"
      ]
    },
    "priceUnit": "코트 1면 · 2026-10 예약시스템 기준",
    "prices": [
      [
        "실외 평일 09~18시",
        "6,400원 / 1시간"
      ],
      [
        "실외 평일 18~22시",
        "12,800원 / 1시간"
      ],
      [
        "실외 주말",
        "12,800~25,600원 / 2시간 (시간대별)"
      ],
      [
        "실내(4~6번)",
        "평일 낮 15,000원 / 1시간 · 이른 아침 20,000원"
      ]
    ],
    "booking": [
      "매일 열림 · 사용일 기준 7일 뒤 사용분까지",
      "09:00~09:30 양천구민 우선 → 09:30~23:00 누구나",
      "1일 1코트, 최대 4시간 · 양도 불가"
    ],
    "links": {
      "reserve": "https://www.ycs.or.kr",
      "info": "https://www.ycs.or.kr/fmcs/34",
      "tel": "02-2643-0686"
    },
    "transit_gongdeok": {
      "min": 26,
      "route": "5호선 공덕 → 오목교 (8정거장) + 도보 7분"
    }
  },
  {
    "id": "anyangcheon",
    "name": "안양천 생활체육공원 테니스장",
    "type": "public",
    "operator": "영등포구시설관리공단",
    "address": "서울 영등포구 양화동 4-1 일대",
    "approx": true,
    "lat": 37.5408,
    "lng": 126.8885,
    "transit": {
      "min": 20,
      "route": "버스 → 안양천입구 정류장 하차 + 도보 (선유도역 1번 출구 도보 15분)"
    },
    "tags": [
      "하드코트",
      "7면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "22시까지 운영"
      ],
      "weekend": [
        "ok",
        "06~22시"
      ]
    },
    "priceUnit": "1팀·2시간",
    "prices": [
      [
        "평일 주간",
        "8,000원"
      ],
      [
        "평일 야간",
        "약 10,400원 (조명 +30%)"
      ],
      [
        "토요일·공휴일",
        "10,400원"
      ]
    ],
    "booking": [
      "최초 1회 팀 등록·승인 필요",
      "매월 20~24일 구민팀 정기 접수 (다음 달 사용분)",
      "매월 25일~말일 남은 자리 수시 접수 · 결제 완료 순"
    ],
    "links": {
      "reserve": "https://srent.y-sisul.or.kr/page/rent/s04.od.list.asp",
      "info": "https://srent.y-sisul.or.kr/page/rent/s04.info.asp",
      "tel": "010-7389-2988"
    },
    "transit_gongdeok": {
      "min": 35,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 → 선유도 (3정거장) + 도보 약 15분 (1번 출구)"
    }
  },
  {
    "id": "nambu",
    "name": "남부도로사업소 테니스장",
    "type": "public",
    "operator": "서울시 남부도로사업소",
    "address": "서울 영등포구 도림로 145",
    "approx": true,
    "lat": 37.4937,
    "lng": 126.8963,
    "transit": {
      "min": 12,
      "route": "2호선 영등포구청 → 대림 (3정거장) · 10번 출구 바로 앞"
    },
    "tags": [
      "인조잔디",
      "2면",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간 18~22시 상품"
      ],
      "weekend": [
        "ok",
        "06~22시"
      ]
    },
    "priceUnit": "1팀·2시간",
    "prices": [
      [
        "요금",
        "유료 (금액은 예약 페이지에서 확인)"
      ],
      [
        "결제",
        "예약 후 1시간 안에 입금하지 않으면 자동 취소"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 · 선착순",
      "보름 단위 상품 (1~15일 / 16~말일)",
      "평일 주간, 평일 야간, 주말 상품이 따로 있음"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261008132544106716",
      "info": "https://yeyak.seoul.go.kr",
      "tel": "010-5488-9464"
    },
    "transit_gongdeok": {
      "min": 27,
      "route": "5호선 공덕 → 영등포구청 (6정거장) 환승 2호선 → 대림 (3정거장) · 10번 출구 바로 앞"
    }
  },
  {
    "id": "daerim",
    "name": "대림운동장 테니스장",
    "type": "public",
    "operator": "영등포구시설관리공단",
    "address": "서울 영등포구 대림3동 대림운동장",
    "lat": 37.49939,
    "lng": 126.89458,
    "transit": {
      "min": 20,
      "route": "2호선 영등포구청 → 대림 (3정거장) + 도보 약 10분"
    },
    "tags": [
      "클레이코트",
      "3면",
      "18~22시 무료 자율이용"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "예약은 18시까지, 이후 무료 자율이용"
      ],
      "weekend": [
        "ok",
        "08~18시 (동계)"
      ]
    },
    "priceUnit": "1팀·2시간",
    "prices": [
      [
        "평일",
        "8,000원"
      ],
      [
        "토요일·공휴일",
        "10,400원"
      ],
      [
        "18~22시",
        "무료 자율이용 (예약 없음)"
      ]
    ],
    "booking": [
      "최초 1회 팀 등록·승인 필요",
      "매월 20~24일 구민팀 정기 접수 (다음 달 사용분)",
      "매월 25일~말일 남은 자리 수시 접수"
    ],
    "links": {
      "reserve": "https://srent.y-sisul.or.kr/daerim/page/rent/s02.od.list.asp",
      "info": "https://srent.y-sisul.or.kr/daerim/page/rent/s02.info.asp",
      "tel": "010-2640-8895"
    },
    "transit_gongdeok": {
      "min": 36,
      "route": "5호선 공덕 → 영등포구청 (6정거장) 환승 2호선 → 대림 (3정거장) + 도보 약 10분"
    }
  },
  {
    "id": "boramae-park",
    "name": "보라매공원 테니스장",
    "type": "public",
    "operator": "서울시 서부공원여가센터 (보라매공원)",
    "address": "서울 동작구 여의대방로20길 25 (신대방동, 보라매공원 내)",
    "lat": 37.4957,
    "lng": 126.9188,
    "approx": false,
    "transit": {
      "min": 25,
      "route": "2호선 영등포구청 → 신대방 (5정거장) + 도보 8분"
    },
    "tags": [
      "인조잔디",
      "7면",
      "야간조명",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간(18~22시) 회차 별도 운영, 단 인기 많아 조기 마감"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 06~22시 운영 (경쟁 치열)"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "8,000원 / 2시간"
      ],
      [
        "평일 야간(18시 이후)·주말·공휴일",
        "10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매일 09:00 오픈 → 익일부터 14일 후까지 예약 가능",
      "선착순, 1회 1팀(1면)·기본 2시간",
      "6·7번 코트는 레슨 우선 코트(운영자 판단 개방)",
      "당일 취소 불가, 1~2일 전 30% 공제"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251210142256402044",
      "info": "https://seoul-tennis.com/dongjak-gu",
      "tel": "010-9649-3323"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251210142256402044",
      "https://seoul-tennis.com/dongjak-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1471",
      "https://courtskorea.com/courts/boramae-tennis-court-1beonkoteu-yagan"
    ],
    "transit_gongdeok": {
      "min": 36,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 → 샛강 (1정거장) 환승 신림선 → 보라매공원 (5정거장) + 도보 7분"
    }
  },
  {
    "id": "dongjak-tennis",
    "name": "동작테니스장 (동작주차공원)",
    "type": "public",
    "operator": "동작구시설관리공단 / 동작구테니스협회 운영",
    "address": "서울 동작구 현충로 213 (동작동, 동작주차공원 내)",
    "lat": 37.50282,
    "lng": 126.97835,
    "approx": false,
    "transit": {
      "min": 32,
      "route": "5호선 영등포구청 → 여의도 (3정거장) 환승 9호선 급행 → 동작 (2정거장) + 도보 7분"
    },
    "tags": [
      "클레이",
      "6면",
      "야간조명(3면)",
      "주차(공영 유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 저녁할증 회차 18~22시(일부 코트 18~21시)"
      ],
      "weekend": [
        "ok",
        "주말 할증 회차 운영, 06~22시 중 코트별 상이"
      ]
    },
    "prices": [
      [
        "요금",
        "확인 필요 (평일 낮 기본, 새벽·저녁·주말 할증 적용)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매일 09:00에 7일 뒤 날짜 오픈 (이용 7일 전 09시 ~ 전날 0시)",
      "선착순, 1인/1팀 최대 1코트·2시간, 당일 신청 불가",
      "우천 시 전 코트 이용 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S241231205401190096",
      "info": "https://www.idongjak.or.kr/html/facility/facility01_06_01.php",
      "tel": "010-2474-2461"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S241231205401190096",
      "https://seoul-tennis.com/dongjak-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1581",
      "https://www.idongjak.or.kr/html/facility/facility01_06_01.php",
      "https://courtskorea.com/courts/dongjak-tennis-court-weekday-jeonyeokhaljeung-18si-22si-5beonkoteu"
    ],
    "transit_gongdeok": {
      "min": 24,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 급행 → 동작 (2정거장) + 도보 7분"
    }
  },
  {
    "id": "noryangjin-park",
    "name": "노량진근린공원 테니스장",
    "type": "public",
    "operator": "동작구청 공원녹지과",
    "address": "서울 동작구 여의대방로36길 71 (노량진근린공원)",
    "lat": 37.50784,
    "lng": 126.92712,
    "approx": false,
    "transit": {
      "min": 28,
      "route": "5호선 영등포구청 → 신길 (2정거장) 환승 1호선 → 대방 (1정거장) + 도보 12분"
    },
    "tags": [
      "5면"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "포털상 운영시간 00~24시로 표기되나 예약·조명 정보 확인 필요"
      ],
      "weekend": [
        "meh",
        "이용 가능 여부·예약 방식 확인 필요"
      ]
    },
    "prices": [
      [
        "요금",
        "8,000~10,400원 (서울시 생활체육포털 기재, 시간 단위 확인 필요)"
      ]
    ],
    "booking": [
      "예약 방식 확인 필요 (서울시 공공서비스예약 미등록, 포털상 '예약 가능'으로 표기)",
      "문의: 동작구청 공원녹지과"
    ],
    "links": {
      "reserve": "",
      "info": "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=862",
      "tel": "02-820-9845"
    },
    "sources": [
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=862"
    ],
    "transit_gongdeok": {
      "min": 30,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 대방 (1정거장) + 도보 12분"
    }
  },
  {
    "id": "seoul-yongma",
    "name": "서울용마테니스장",
    "type": "private",
    "operator": "민간 (확인 필요)",
    "address": "서울 동작구 대방동길 74",
    "lat": 37.5065,
    "lng": 126.9262,
    "approx": true,
    "transit": {
      "min": 38,
      "route": "2호선 영등포구청 → 대림 (3정거장) 환승 7호선 → 신대방삼거리 (3정거장) + 도보 15분"
    },
    "tags": [
      "클레이",
      "6면",
      "주차"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "운영시간·조명 정보 확인 필요"
      ],
      "weekend": [
        "meh",
        "주말 이용 가능하나 요금 높음, 운영 여부 확인 필요"
      ]
    },
    "prices": [
      [
        "평일",
        "10,000원 / 1시간 (GoTennis 기재, 오래된 정보)"
      ],
      [
        "휴일",
        "25,000원 / 1시간 (GoTennis 기재, 오래된 정보)"
      ]
    ],
    "booking": [
      "전화 예약 (02-821-6610)",
      "노량진근린공원 테니스장과 인접/동일 단지일 가능성 있음 — 방문 전 확인 필요"
    ],
    "links": {
      "reserve": "",
      "info": "http://gotennis.kr/seoul/808/",
      "tel": "02-821-6610"
    },
    "sources": [
      "http://gotennis.kr/seoul/808/"
    ],
    "transit_gongdeok": {
      "min": 32,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 → 샛강 (1정거장) 환승 신림선 → 서울지방병무청 (2정거장) + 도보 5분"
    }
  },
  {
    "id": "gwanak-gumin",
    "name": "관악구민운동장 테니스장",
    "type": "public",
    "operator": "관악구시설관리공단",
    "address": "서울 관악구 낙성대로 40 (봉천동)",
    "lat": 37.47558,
    "lng": 126.95688,
    "approx": false,
    "transit": {
      "min": 38,
      "route": "2호선 영등포구청 → 낙성대 (9정거장) + 도보 14분"
    },
    "tags": [
      "인조잔디",
      "4면",
      "야간조명",
      "주차(유료)",
      "샤워실"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 야간 이용 가능"
      ],
      "weekend": [
        "ok",
        "주말 06~22시 운영"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "5,500원 / 1면 1시간"
      ],
      [
        "토·일·공휴일 주간",
        "7,700원 / 1면 1시간"
      ],
      [
        "야간 (평일·휴일)",
        "11,000원 / 1면 1시간"
      ],
      [
        "비고",
        "부가세 포함, 06~22시 1시간 단위, 초과 시 초과시간당 50% 할증"
      ]
    ],
    "booking": [
      "관악구시설관리공단 통합예약 누리집 > 대관신청 > 관악구민운동장 > 테니스장",
      "매월 1일 다음 달 추첨 신청 → 18일 10:00 결과 발표",
      "매월 22일 09:00 다음 달 잔여분 일반(선착순) 예약 오픈",
      "1시간 단위 예약"
    ],
    "links": {
      "reserve": "https://booking.gwanakgongdan.or.kr/booking/1515",
      "info": "https://courtskorea.com/courts/gwanakguminundongjang-tennis-court",
      "tel": "02-2015-2750"
    },
    "sources": [
      "https://seoul-tennis.com/gwanak-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=718",
      "http://gotennis.kr/seoul/751/",
      "https://courtskorea.com/courts/gwanakguminundongjang-tennis-court",
      "https://booking.gwanakgongdan.or.kr/booking/1573"
    ],
    "transit_gongdeok": {
      "min": 43,
      "route": "6호선 공덕 → 삼각지 (2정거장) 환승 4호선 → 사당 (5정거장) 환승 2호선 → 낙성대 (1정거장) + 도보 14분"
    }
  },
  {
    "id": "seonu-park",
    "name": "선우공원 테니스장 (관악산생태공원)",
    "type": "public",
    "operator": "관악구 공원녹지과 / 관악구테니스협회",
    "address": "서울 관악구 문성로16다길 133-69 (신림동)",
    "lat": 37.46734,
    "lng": 126.91392,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "2호선 영등포구청 → 신림 (7정거장) + 버스 환승·도보 약 20분"
    },
    "tags": [
      "인조잔디",
      "3면",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 야간 회차 18~20시까지만"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 06~20시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일",
        "10,400원 / 2시간 (서울시 생활체육포털 기재)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매월 25일 09:30 다음 달 예약 오픈 (주말이면 다음 평일)",
      "선착순, 1회 1면, 1일 최대 4시간",
      "이용 3일 전 18시 접수 마감, 2일 전부터 취소 환불 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260921185443204584",
      "info": "https://seoul-tennis.com/gwanak-gu",
      "tel": "010-4542-7476"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260921185443204584",
      "https://seoul-tennis.com/gwanak-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=736",
      "https://courtskorea.com/courts/seonu-park-tennis-court-bkoteu-weekday-yagan"
    ],
    "transit_gongdeok": {
      "min": 55,
      "route": "5호선 공덕 → 여의도 환승 9호선 → 샛강 환승 신림선 → 신림 (7정거장) + 버스 환승·도보 약 20분"
    }
  },
  {
    "id": "nanu-park",
    "name": "난우공원 테니스장",
    "type": "public",
    "operator": "관악구청 문화관광체육과",
    "address": "서울 관악구 법원단지5나길 77 (신림동)",
    "lat": 37.47767,
    "lng": 126.92218,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "2호선 영등포구청 → 신림 (7정거장) + 버스 환승·도보 약 20분"
    },
    "tags": [
      "클레이",
      "2면",
      "주차 협소",
      "샤워실"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "운영 10~20시, 평일 저녁 2시간 정도만 가능"
      ],
      "weekend": [
        "ok",
        "주말 10~20시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일·평일 야간(18시 이후)",
        "10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 선착순 1회 1명",
      "1일 1인 최대 2시간, 이용 1일 전 0시 접수 마감",
      "당일 취소 환불 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S250520182539872577",
      "info": "https://seoul-tennis.com/gwanak-gu",
      "tel": "010-2472-4116"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S250520182539872577",
      "https://seoul-tennis.com/gwanak-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=729"
    ],
    "transit_gongdeok": {
      "min": 50,
      "route": "5호선 공덕 → 여의도 환승 9호선 → 샛강 환승 신림선 → 신림 (7정거장) + 버스 환승·도보 약 15분"
    }
  },
  {
    "id": "worldcup-park",
    "name": "월드컵공원 테니스장",
    "type": "public",
    "operator": "서울시 서부공원여가센터",
    "address": "서울 마포구 월드컵로 243-48 (성산동, 월드컵공원)",
    "lat": 37.56229,
    "lng": 126.89681,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "2호선 영등포구청 → 합정 (2정거장) 환승 6호선 → 월드컵경기장 (3정거장) + 도보 15분"
    },
    "tags": [
      "클레이",
      "2면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "11~2월 평일 야간 18~21시 (3~10월은 19~21시), 월요일 휴장"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 07~21시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "4,000원 / 1시간 (8,000원 / 2시간)"
      ],
      [
        "야간·토·일·공휴일",
        "5,200원 / 1시간 (10,400원 / 2시간)"
      ],
      [
        "2시간 초과분",
        "시간당 요금 50% 할인"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 월 단위 오픈 (11월 이용분은 10/15 13:00 오픈)",
      "선착순, 1회 1팀, 기본 1시간·1일 최대 4시간",
      "이용 1일 전 24시까지 접수, 매주 월요일 휴장"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260911092705042045",
      "info": "https://seoul-tennis.com/mapo-gu",
      "tel": "02-304-3216"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260911092705042045",
      "https://seoul-tennis.com/mapo-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=920",
      "http://gotennis.kr/seoul/896/"
    ],
    "transit_gongdeok": {
      "min": 32,
      "route": "6호선 공덕 → 월드컵경기장 (7정거장) + 도보 15분"
    }
  },
  {
    "id": "mangwon-hangang",
    "name": "망원한강공원 테니스장",
    "type": "public",
    "operator": "서울시 미래한강본부 (위탁운영 123테니스)",
    "address": "서울 마포구 마포나루길 407 (망원동)",
    "lat": 37.55226,
    "lng": 126.8994,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "2호선 영등포구청 → 합정 (2정거장) + 마을버스·도보 약 20분"
    },
    "tags": [
      "클레이",
      "6면",
      "야간조명",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 저녁 회차 18~22시"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 08~22시"
      ]
    },
    "prices": [
      [
        "기본 (1회 2시간 이내)",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일 또는 조명 이용",
        "30% 가산 → 10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매월 1일 00:00 당월 예약 오픈",
      "선착순, 1회 1면, 같은 시간대 1인 1코트",
      "이용 1일 전까지 취소, 양도 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260926082859985641",
      "info": "https://seoul-tennis.com/mapo-gu",
      "tel": "010-9019-0416"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260926082859985641",
      "https://seoul-tennis.com/mapo-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1510",
      "https://courtskorea.com/courts/mangwon-hangang-park-tennis-court-1beon-koteu-jeonyeok"
    ],
    "transit_gongdeok": {
      "min": 29,
      "route": "6호선 공덕 → 망원 (5정거장) + 도보 약 16분 (또는 마을버스)"
    }
  },
  {
    "id": "mangwon-nadeulmok",
    "name": "망원나들목 테니스장",
    "type": "public",
    "operator": "마포구 (마포구체육회 등)",
    "address": "서울 마포구 동교로1길 53 (망원동)",
    "lat": 37.5541,
    "lng": 126.899,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "2호선 영등포구청 → 합정 (2정거장) + 마을버스·도보 약 20분"
    },
    "tags": [
      "인조잔디",
      "4면",
      "조명 사용 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "운영 09~19시, 조명탑 사용 불가"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 09~19시"
      ]
    },
    "prices": [
      [
        "평일",
        "10,000원 / 회차(약 2시간)"
      ],
      [
        "주말",
        "13,000원 / 회차(약 2시간)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 월 단위 오픈 (10월분은 9/26 10:00 오픈)",
      "선착순, 1회 1명 신청, 2번 코트만 개방 (나머지는 클럽 사용)",
      "화·목 5회차, 수·금 4회차는 강습으로 이용 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260911145330317818",
      "info": "https://seoul-tennis.com/mapo-gu",
      "tel": "010-8678-1858"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260911145330317818",
      "https://seoul-tennis.com/mapo-gu",
      "http://gotennis.kr/seoul/8535/"
    ],
    "transit_gongdeok": {
      "min": 28,
      "route": "6호선 공덕 → 망원 (5정거장) + 도보 약 15분 (또는 마을버스)"
    }
  },
  {
    "id": "nanji-hangang",
    "name": "난지한강공원 테니스장",
    "type": "public",
    "operator": "서울시 미래한강본부 (위탁운영 123테니스)",
    "address": "서울 마포구 한강난지로 162 (상암동)",
    "lat": 37.56105,
    "lng": 126.88802,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "2호선 영등포구청 → 합정 환승 6호선 → 월드컵경기장 + 버스 환승 약 15분"
    },
    "tags": [
      "하드코트",
      "3면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 저녁 회차 18~22시"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 08~22시"
      ]
    },
    "prices": [
      [
        "기본 (1회 2시간 이내)",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일 또는 조명 이용",
        "30% 가산 → 10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매월 1일 00:00 당월 예약 오픈",
      "선착순, 1회 1면, 같은 시간대 1인 1코트",
      "이용 1일 전까지 취소"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260926111431249095",
      "info": "https://seoul-tennis.com/mapo-gu",
      "tel": "010-9136-0416"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260926111431249095",
      "https://seoul-tennis.com/mapo-gu",
      "https://courtskorea.com/courts/nanji-hangang-park-tennis-court-1beon-koteu-jeonyeok"
    ],
    "transit_gongdeok": {
      "min": 35,
      "route": "6호선 공덕 → 월드컵경기장 (7정거장) + 도보 약 18분 (또는 버스 환승)"
    }
  },
  {
    "id": "ichon-hangang",
    "name": "이촌한강공원 테니스장",
    "type": "public",
    "operator": "서울시 미래한강본부 (위탁운영 123테니스)",
    "address": "서울 용산구 용산동6가 450-1 (이촌한강공원)",
    "lat": 37.51565,
    "lng": 126.98475,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 → 동작 환승 4호선 → 이촌 (1정거장) + 도보 15분"
    },
    "tags": [
      "클레이",
      "8면",
      "야간조명",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 저녁 회차 18~22시"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 08~22시 (조기 마감)"
      ]
    },
    "prices": [
      [
        "기본 (1회 2시간 이내)",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일 또는 조명 이용",
        "30% 가산 → 10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매월 1일 00:00 당월 예약 오픈",
      "선착순, 1회 1면, 같은 시간대 1인 1코트, 실명 확인",
      "이용 1일 전까지 취소"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260922164316267185",
      "info": "https://seoul-tennis.com/yongsan-gu",
      "tel": "010-3542-3864"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260922164316267185",
      "https://seoul-tennis.com/yongsan-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1127",
      "https://courtskorea.com/courts/ichon-hangang-park-tennis-court-5beon-koteu-jeonyeok"
    ],
    "transit_gongdeok": {
      "min": 27,
      "route": "경의중앙선 공덕 → 서빙고 (4정거장, 배차 간격 김) + 도보 9분"
    }
  },
  {
    "id": "hannam-tennis",
    "name": "한남테니스장 (응봉근린공원)",
    "type": "public",
    "operator": "용산구시설관리공단",
    "address": "서울 용산구 다산로 8-12 (한남동)",
    "lat": 37.54613,
    "lng": 127.00367,
    "approx": false,
    "transit": {
      "min": 42,
      "route": "5호선 영등포구청 → 공덕 (6정거장) 환승 6호선 → 버티고개 (6정거장) + 도보 8분"
    },
    "tags": [
      "클레이 6면",
      "인조잔디 6면",
      "12면",
      "주차",
      "샤워실"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간 17~22시 회차 (코트별 요일 상이)"
      ],
      "weekend": [
        "ok",
        "주말 회차 운영 (코트별 상이)"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "4,000원 (시간 단위 확인 필요)"
      ],
      [
        "주말·야간",
        "5,200원 (시간 단위 확인 필요)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 월 2회 오픈: 말일 09:00(다음 달 1~15일분), 15일 09:00(16일~말일분)",
      "선착순, 1회 1팀, 같은 코트 1일 최대 4시간",
      "1일 전 취소 30% 공제, 당일 환불 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260813143523487045",
      "info": "https://seoul-tennis.com/yongsan-gu",
      "tel": "02-749-2492"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260813143523487045",
      "https://seoul-tennis.com/yongsan-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1120",
      "https://courtskorea.com/courts/hannam-tennis-court-1beonkoteu-weekday-jugan"
    ],
    "transit_gongdeok": {
      "min": 23,
      "route": "6호선 공덕 → 버티고개 (6정거장) + 도보 8분"
    }
  },
  {
    "id": "yongsan-park-garden",
    "name": "용산어린이정원 테니스장",
    "type": "public",
    "operator": "용산어린이정원 운영기관",
    "address": "서울 용산구 한강대로38길 21 일대 (용산어린이정원 스포츠필드)",
    "lat": 37.52996,
    "lng": 126.97808,
    "approx": true,
    "transit": {
      "min": 40,
      "route": "5호선 영등포구청 → 신길 환승 1호선 → 용산 (3정거장) + 도보 15분 (정원 입장 절차 필요)"
    },
    "tags": [
      "하드코트",
      "인조잔디"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "이용 10:00~17:30"
      ],
      "weekend": [
        "meh",
        "주간만 가능, 정원 개방일(월 휴무) 확인 필요"
      ]
    },
    "prices": [
      [
        "평일 인조잔디 코트",
        "10,000원 / 1면 2시간(1회차)"
      ],
      [
        "주말 인조잔디 코트",
        "13,000원 / 1면 2시간"
      ],
      [
        "평일 하드코트",
        "18,000원 / 1면 2시간"
      ],
      [
        "주말 하드코트",
        "23,400원 / 1면 2시간"
      ],
      [
        "적용·회차",
        "2026.11.1 사용분부터 유료 (10월까지 무료), 10-12/12-14/14-16/16-18시 4회차"
      ]
    ],
    "booking": [
      "용산어린이정원 누리집 스포츠필드 신청 (서울시 통합회원 로그인)",
      "정원 입장 예약·신분증 필요"
    ],
    "links": {
      "reserve": "https://yongsanparkstory.kr/program/reservation.html",
      "info": "https://seoul-tennis.com/yongsan-gu",
      "tel": "070-8833-5800"
    },
    "sources": [
      "https://seoul-tennis.com/yongsan-gu",
      "https://yongsanparkstory.kr/program/reservation.html"
    ],
    "transit_gongdeok": {
      "min": 20,
      "route": "6호선 공덕 → 삼각지 (2정거장) + 도보 약 12분 (정원 입장 절차 필요)"
    }
  },
  {
    "id": "second-rally-yongsan",
    "name": "세컨드랠리 용산점 (실내 연습코트)",
    "type": "private",
    "operator": "세컨드랠리 (민간)",
    "address": "서울 용산구 한강대로15길 23 삼정빌딩 5층 (한강로3가)",
    "lat": 37.529,
    "lng": 126.967,
    "approx": true,
    "transit": {
      "min": 30,
      "route": "5호선 영등포구청 → 신길 (2정거장) 환승 1호선 → 용산 (3정거장) + 도보 8분"
    },
    "tags": [
      "실내",
      "연습코트(약 10×16m, 정규 코트 아님)",
      "볼머신",
      "24시간"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "24시간 무인 운영, 1시간 단위"
      ],
      "weekend": [
        "ok",
        "연중무휴"
      ]
    },
    "prices": [
      [
        "주간",
        "30,000원 / 1시간"
      ],
      [
        "아침",
        "20,000원 / 1시간"
      ],
      [
        "새벽(00~06시)",
        "10,000원 / 1시간"
      ]
    ],
    "booking": [
      "네이버 예약 / 라켓타임에서 1시간 단위 예약",
      "레슨 시간대는 예약 막힘, 당일 재오픈 가능",
      "1~2인 연습용 (단·복식 경기 불가)"
    ],
    "links": {
      "reserve": "http://secondrally.co.kr/",
      "info": "http://secondrally.co.kr/",
      "tel": ""
    },
    "sources": [
      "http://secondrally.co.kr/",
      "https://blog.naver.com/inggochucheon/223918565210"
    ],
    "transit_gongdeok": {
      "min": 16,
      "route": "경의중앙선 공덕 → 용산 (2정거장) + 도보 5분 (또는 6호선 삼각지 환승 4호선 신용산)"
    }
  },
  {
    "id": "jangchung",
    "name": "장충테니스장",
    "type": "public",
    "operator": "서울시 중부공원여가센터 (남산공원)",
    "address": "서울 중구 장충단로 91 (장충동2가)",
    "lat": 37.55354,
    "lng": 127.00157,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 동대문역사문화공원 (14정거장) + 버스/도보 약 15분"
    },
    "tags": [
      "하드코트",
      "9면",
      "야간조명",
      "무료주차(1면당 2대)",
      "샤워실"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간 18~22시 회차 (조기 마감)"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 06~22시 (경쟁 매우 치열)"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "8,000원 / 2시간"
      ],
      [
        "평일 야간(18시 이후)",
        "10,400원 / 2시간"
      ],
      [
        "주말·공휴일",
        "10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 월 2회 오픈: 25일 10:00(다음 달 1~15일분), 10일 10:00(16일~말일분)",
      "선착순, 1인 1일 1코트 1회(2시간), 월 5회 한도",
      "카드 결제 2시간 이내, 당일·전날 취소 시 95% 공제"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261003145845242737",
      "info": "https://seoul-tennis.com/jung-gu",
      "tel": "010-5831-4977"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261003145845242737",
      "https://seoul-tennis.com/jung-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1156",
      "http://gotennis.kr/seoul/536/",
      "https://courtskorea.com/courts/jangchung-tennis-court-2beonkoteu-weekday-yagan"
    ],
    "transit_gongdeok": {
      "min": 32,
      "route": "6호선 공덕 → 약수 (7정거장) 환승 3호선 → 동대입구 (1정거장) + 도보 10분"
    }
  },
  {
    "id": "songijeong",
    "name": "손기정문화체육센터 테니스장",
    "type": "public",
    "operator": "중구시설관리공단",
    "address": "서울 중구 손기정로 101 (만리동)",
    "lat": 37.55526,
    "lng": 126.96501,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "5호선 영등포구청 → 애오개 (8정거장) + 도보 12분"
    },
    "tags": [
      "클레이",
      "2면",
      "야간조명",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 07~22시, 야간 이용 가능"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 07~20시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "8,000원 / 1시간 (일일이용)"
      ],
      [
        "평일 야간",
        "10,000원 / 1시간"
      ],
      [
        "주말·공휴일 주간",
        "18,000원 / 1시간"
      ],
      [
        "주말·공휴일 야간",
        "20,000원 / 1시간"
      ]
    ],
    "booking": [
      "중구시설관리공단 누리집 대관신청 (서울시 통합회원 로그인)",
      "다음 달 예약: 중구민 21일 09:00, 전체 27일 09:00 오픈",
      "우천 시 미운영, 환불은 우천 확인 후 누리집 신청"
    ],
    "links": {
      "reserve": "https://www.e-junggu.or.kr/fmcs/314",
      "info": "https://www.e-junggu.or.kr/fmcs/220",
      "tel": "02-2280-8450"
    },
    "sources": [
      "https://seoul-tennis.com/jung-gu",
      "https://www.e-junggu.or.kr/fmcs/220",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1165",
      "https://courtskorea.com/courts/songijeongmunhwacheyuk-center-tennis-court"
    ],
    "transit_gongdeok": {
      "min": 17,
      "route": "5호선 공덕 → 애오개 (1정거장) + 도보 12분"
    }
  },
  {
    "id": "samcheong",
    "name": "삼청테니스장",
    "type": "public",
    "operator": "종로구시설관리공단",
    "address": "서울 종로구 삼청로 156 (삼청동)",
    "lat": 37.58886,
    "lng": 126.983,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "5호선 영등포구청 → 광화문 (11정거장) + 종로11 마을버스 종점 (약 12분)"
    },
    "tags": [
      "클레이 4면",
      "하드 2면",
      "6면",
      "야간조명",
      "주차"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간 19~21시 회차 (월 단위 오픈, 조기 마감)"
      ],
      "weekend": [
        "ok",
        "주말 06~18시 (야간 없음)"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "6,600원 / 1시간 (최소 2시간)"
      ],
      [
        "평일 야간",
        "8,800원 / 1시간"
      ],
      [
        "주말·공휴일 주간",
        "8,800원 / 1시간"
      ],
      [
        "조명료(새벽·18시 이후)",
        "5,500원 / 1시간 별도 (현장 카드결제)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 매월 20일 06:00 다음 달 예약 오픈",
      "선착순, 1회 1팀, 이용 전날 20시 마감",
      "3일 전까지 취소 가능, 결제는 현장 방문결제"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261006164009081487",
      "info": "https://seoul-tennis.com/jongno-gu",
      "tel": "02-2148-4068"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261006164009081487",
      "https://seoul-tennis.com/jongno-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1200",
      "https://courtskorea.com/courts/samcheong-tennis-court-koteuiyong-yagan"
    ],
    "transit_gongdeok": {
      "min": 26,
      "route": "5호선 공덕 → 광화문 (4정거장) + 종로11 마을버스 종점 (약 15분)"
    }
  },
  {
    "id": "gajwa",
    "name": "가좌테니스장",
    "type": "public",
    "operator": "서대문구 (위탁운영 SST클럽)",
    "address": "서울 서대문구 백련사길 55 (홍은동 산26-170)",
    "lat": 37.58256,
    "lng": 126.92993,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "2호선 영등포구청 → 홍대입구 (3정거장) + 버스 환승·도보 약 25분"
    },
    "tags": [
      "인조잔디",
      "2면",
      "야간조명",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간 18~22시 (B코트)"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 주간 06~18시, 야간 18~22시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "12,000원 / 2시간"
      ],
      [
        "주말·공휴일",
        "15,600원 / 2시간"
      ],
      [
        "조명료",
        "9,000원 / 1시간 (서대문 공지, 적용 여부 확인 필요)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 월 2회 오픈: 25일(다음 달 1~15일분), 10일(16일~말일분)",
      "서대문구민 00:00 우선, 서울시민 09:00부터",
      "선착순 1팀, 월 4회·1일 4시간 한도, 2시간 내 미결제 시 취소"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009145459912745",
      "info": "https://seoul-tennis.com/seodaemun-gu",
      "tel": "010-5488-9464"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009145459912745",
      "https://seoul-tennis.com/seodaemun-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=926",
      "https://courtskorea.com/courts/gajwa-tennis-court-weekday-yagan-bkoteu"
    ],
    "transit_gongdeok": {
      "min": 35,
      "route": "공항철도 공덕 → 홍대입구 (1정거장) + 버스 환승·도보 약 25분"
    }
  },
  {
    "id": "hongeun",
    "name": "홍은테니스장",
    "type": "public",
    "operator": "서대문구 (위탁운영 SST클럽)",
    "address": "서울 서대문구 통일로48나길 33 (홍은동)",
    "lat": 37.59689,
    "lng": 126.94053,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 서대문 (9정거장) + 버스 환승 약 20분"
    },
    "tags": [
      "인조잔디",
      "2면",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "평일은 11~13시 회차만 공개 예약"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 야간 18~21시 회차"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "12,000원 / 2시간"
      ],
      [
        "주말·공휴일",
        "15,600원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 10일·25일 00:00 오픈",
      "서대문구민 00:00 우선, 서울시민 09:00부터",
      "선착순 1팀, 월 4일 한도"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009145219767871",
      "info": "https://seoul-tennis.com/seodaemun-gu",
      "tel": "010-5488-9464"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009145219767871",
      "https://seoul-tennis.com/seodaemun-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1046"
    ],
    "transit_gongdeok": {
      "min": 36,
      "route": "5호선 공덕 → 서대문 (3정거장) + 버스 환승(통일로) 홍은동 + 도보 약 10분"
    }
  },
  {
    "id": "hyeonjeo",
    "name": "현저테니스장",
    "type": "public",
    "operator": "서대문구 (위탁운영 SST클럽)",
    "address": "서울 서대문구 통일로 279-37 (현저동)",
    "lat": 37.57328,
    "lng": 126.95237,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "5호선 영등포구청 → 서대문 (9정거장) + 버스/도보 약 20분 (3호선 독립문역 인근)"
    },
    "tags": [
      "인조잔디",
      "2면",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "공개 예약은 주말·공휴일만"
      ],
      "weekend": [
        "ok",
        "주말·공휴일 주간 13~16시, 야간 19~22시"
      ]
    },
    "prices": [
      [
        "평일 주간",
        "12,000원 / 2시간"
      ],
      [
        "주말·공휴일",
        "15,600원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 구민 우선: 25일·10일 00:00 / 시민: 25일 09:00",
      "선착순 1팀"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009225743558484",
      "info": "https://seoul-tennis.com/seodaemun-gu",
      "tel": "010-5488-9464"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261009225743558484",
      "https://seoul-tennis.com/seodaemun-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1044",
      "https://courtskorea.com/courts/hyeonjeo-tennis-court-weekend-mit-holiday-jugan"
    ],
    "transit_gongdeok": {
      "min": 27,
      "route": "5호선 공덕 → 서대문 (3정거장) + 버스/도보 약 18분 (3호선 독립문역 인근)"
    }
  },
  {
    "id": "jangmi-eunpyeong",
    "name": "장미테니스장 (북한산 저류조 상부)",
    "type": "public",
    "operator": "은평구시설관리공단",
    "address": "서울 은평구 진흥로 290 (북한산도시자연공원 저류조 상부)",
    "lat": 37.61013,
    "lng": 126.94129,
    "approx": false,
    "transit": {
      "min": 55,
      "route": "2호선 영등포구청 → 합정 환승 6호선 → 불광 (9정거장) + 버스/도보 약 20분"
    },
    "tags": [
      "인조잔디",
      "2면",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "매일 06~22시 운영"
      ],
      "weekend": [
        "ok",
        "주말 06~22시"
      ]
    },
    "prices": [
      [
        "평일",
        "8,800원 / 1시간"
      ],
      [
        "주말·공휴일",
        "11,440원 / 1시간"
      ]
    ],
    "booking": [
      "은평구시설관리공단 누리집 온라인 신청",
      "예약 후 4시간 내 결제(미결제 시 자동 취소)",
      "오픈 일정 확인 필요"
    ],
    "links": {
      "reserve": "https://www.efmc.or.kr/fmcs/32",
      "info": "https://www.efmc.or.kr/fmcs/442",
      "tel": "02-350-5358"
    },
    "sources": [
      "https://seoul-tennis.com/eunpyeong-gu",
      "https://www.efmc.or.kr/fmcs/442",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1151",
      "http://gotennis.kr/seoul/8473/"
    ],
    "transit_gongdeok": {
      "min": 44,
      "route": "6호선 공덕 → 불광 (13정거장) + 버스/도보 약 15분"
    }
  },
  {
    "id": "seonjeong-eunpyeong",
    "name": "선정테니스장 (서오릉근린공원)",
    "type": "public",
    "operator": "은평구시설관리공단",
    "address": "서울 은평구 갈현로27길 45-4",
    "lat": 37.61953,
    "lng": 126.91033,
    "approx": false,
    "transit": {
      "min": 55,
      "route": "2호선 영등포구청 → 합정 환승 6호선 → 구산 (12정거장) + 도보 15분"
    },
    "tags": [
      "인조잔디",
      "3면",
      "주차 불가"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "매일 06~22시 운영"
      ],
      "weekend": [
        "ok",
        "주말 06~22시"
      ]
    },
    "prices": [
      [
        "평일",
        "8,800원 / 1시간"
      ],
      [
        "주말·공휴일",
        "11,440원 / 1시간"
      ]
    ],
    "booking": [
      "은평구시설관리공단 누리집 온라인 신청, 요금은 현장 결제",
      "오픈 일정 확인 필요"
    ],
    "links": {
      "reserve": "https://www.efmc.or.kr/fmcs/32",
      "info": "https://www.efmc.or.kr/fmcs/762",
      "tel": "02-350-5236"
    },
    "sources": [
      "https://seoul-tennis.com/eunpyeong-gu",
      "https://www.efmc.or.kr/fmcs/762",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1752"
    ],
    "transit_gongdeok": {
      "min": 50,
      "route": "6호선 공덕 → 구산 (16정거장) + 도보 15분"
    }
  },
  {
    "id": "eunpyeong-gumin",
    "name": "은평구민체육센터 테니스장",
    "type": "public",
    "operator": "은평구시설관리공단",
    "address": "서울 은평구 진관1로 40 (진관동)",
    "lat": 37.63072,
    "lng": 126.9228,
    "approx": false,
    "transit": {
      "min": 60,
      "route": "2호선 영등포구청 → 합정 환승 6호선 → 연신내 환승 3호선 → 구파발 (2정거장) + 도보 10분"
    },
    "tags": [
      "하드코트",
      "3면",
      "야간조명",
      "주차(유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "평일은 프로그램 운영으로 대관 불가"
      ],
      "weekend": [
        "ok",
        "토·일 09~18시 대관 (공휴일 휴장)"
      ]
    },
    "prices": [
      [
        "대관",
        "14,300원 / 1면·1시간"
      ]
    ],
    "booking": [
      "은평구시설관리공단 누리집 온라인 신청·결제 (주말 대관)",
      "예약 후 4시간 내 미결제 시 자동 취소",
      "오픈 일정 확인 필요"
    ],
    "links": {
      "reserve": "https://www.efmc.or.kr/fmcs/32",
      "info": "https://www.efmc.or.kr/fmcs/31",
      "tel": "02-350-5393"
    },
    "sources": [
      "https://seoul-tennis.com/eunpyeong-gu",
      "https://www.efmc.or.kr/fmcs/31",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=1142"
    ],
    "transit_gongdeok": {
      "min": 52,
      "route": "6호선 공덕 → 연신내 (15정거장) 환승 3호선 → 구파발 (2정거장) + 도보 10분"
    }
  },
  {
    "id": "kitu-clean-tennis-gocheok",
    "name": "귀뚜라미 크린 테니스코트",
    "type": "private",
    "operator": "귀뚜라미 (귀뚜라미 크린 테니스코트)",
    "address": "서울 구로구 경인로46길 51 (고척동)",
    "lat": 37.49536,
    "lng": 126.86604,
    "approx": false,
    "transit": {
      "min": 20,
      "route": "2호선 영등포구청→신도림(2정거장) 환승 → 1호선 구일역(2정거장), 2번 출구 바로 앞"
    },
    "tags": [
      "실내",
      "야외",
      "하드코트",
      "다면(A~M 코트)",
      "주차",
      "샤워실",
      "레슨"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "18시 이후 2시간 단위(짝수 시간) 실내 대관. 금·토는 F~I 코트 22~24시 연장 운영. 매월 15일 09시 익월 예약 오픈이라 미리 잡아야 함"
      ],
      "weekend": [
        "ok",
        "휴일엔 A·B·C 포함 실내 전 코트 대관 가능(주말 오전 일부 레슨 운영). 고척돔 경기일엔 차량 정체"
      ]
    },
    "prices": [
      [
        "실내 평일 (10~11월 기준, 2시간)",
        "G·H·K·L 코트 17시 이전 45,000원 / 18시 이후 55,000원, F·I·J·M 코트 50,000원 / 60,000원"
      ],
      [
        "실내 휴일 (10~11월 기준, 2시간)",
        "A·B·C·G·H·K·L 코트 65,000원, F·I·J·M 코트 70,000원"
      ],
      [
        "실내 동절기(12~2월, 2시간)",
        "평일 18시 이후 66,000~71,000원, 휴일 76,000~81,000원"
      ],
      [
        "야외 (10~11월 기준)",
        "평일 20,000원 / 휴일 30,000원 (단위 확인 필요), 조명 사용 시 시간당 5,000원 추가"
      ]
    ],
    "booking": [
      "자체 온라인 예약 전용(booking.kitutennis.co.kr, 회원가입 필요)",
      "2시간 단위·짝수 시간대만 선택",
      "익월 예약은 매월 15일 09시 오픈, 확정은 문자로 안내",
      "연대관은 안내데스크 전화"
    ],
    "links": {
      "reserve": "https://booking.kitutennis.co.kr/",
      "info": "https://kitutennis.co.kr/sub6.php",
      "tel": "02-2066-8212"
    },
    "sources": [
      "https://kitutennis.co.kr/sub6.php",
      "https://kitutennis.co.kr/",
      "https://checkmate-life.com/entry/%EC%84%9C%EC%9A%B8%EC%8B%A4%EB%82%B4%ED%85%8C%EB%8B%88%EC%8A%A4-%EA%B7%80%EB%9A%9C%EB%9D%BC%EB%AF%B8-%EA%B5%AC%EA%B4%80-%EC%BD%94%ED%8A%B8-%EC%9D%B4%EC%9A%A9%ED%9B%84%EA%B8%B0-%EB%B0%8F-%EC%9D%B4%EC%9A%A9%EB%A3%8C",
      "https://smaxh.com/ko-KR/courts/73905b9e-0ebd-456b-b62e-28f9677d1065"
    ],
    "transit_gongdeok": {
      "min": 26,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 구일 (4정거장), 2번 출구 바로 앞"
    }
  },
  {
    "id": "jd-tennis-club-yeomchang",
    "name": "JD Tennis Club (JD 테니스)",
    "type": "private",
    "operator": "제이디테니스점",
    "address": "서울 강서구 양천로75길 24 (염창동)",
    "lat": 37.55115,
    "lng": 126.87593,
    "approx": false,
    "transit": {
      "min": 20,
      "route": "2호선 영등포구청→당산(1정거장) 환승 → 9호선 염창역(3정거장) → 도보 약 5분"
    },
    "tags": [
      "실내",
      "하드코트",
      "스마트코트(라인판독·서브속도 표시)",
      "냉난방",
      "샤워실",
      "주차 지원",
      "레슨"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "신축 실내 코트, 홈페이지 실시간 예약으로 저녁 슬롯 확인 가능(운영시간 확인 필요)"
      ],
      "weekend": [
        "ok",
        "실내라 날씨 무관. 주말 요금·잔여 슬롯은 예약 페이지에서 확인 필요"
      ]
    },
    "prices": [
      [
        "요금",
        "확인 필요 (홈페이지 실시간 예약 화면에서 표시)"
      ],
      [
        "프로모션",
        "신규 회원 첫 예약 30% 할인, 평일 코트 20% 할인 (홈페이지 안내)"
      ]
    ],
    "booking": [
      "자체 웹/앱 예약(jdtennisclub.com) — 실시간 코트 현황 확인 후 즉시 예약",
      "스매시 앱에도 코트 정보 등록"
    ],
    "links": {
      "reserve": "https://www.jdtennisclub.com/",
      "info": "https://smaxh.com/ko-KR/courts/effedc8b-6b95-4040-90db-bd3f20ea6d27",
      "tel": ""
    },
    "sources": [
      "https://www.jdtennisclub.com/",
      "https://smaxh.com/ko-KR/courts/effedc8b-6b95-4040-90db-bd3f20ea6d27",
      "https://www.sankun.com/site-info/4OEFpD2gNzNK7hA2uIKPRuDchrZ33QwxzCDZ7xii1HI"
    ],
    "transit_gongdeok": {
      "min": 22,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 급행 → 염창 (2정거장) + 도보 약 5분"
    }
  },
  {
    "id": "kbs-sportsworld-indoor",
    "name": "KBS스포츠월드 실내테니스장 (제2체육관)",
    "type": "private",
    "operator": "KBS스포츠월드",
    "address": "서울 강서구 공항대로 376 (화곡동)",
    "lat": 37.55671,
    "lng": 126.84759,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "5호선 영등포구청→우장산역(7정거장) → 도보 약 18분 또는 버스 환승 (블로그는 5호선 발산역 이용 시 도보 20분, 버스 권장)"
    },
    "tags": [
      "실내",
      "하드코트",
      "3면(복식2·단식1, 개장 전 보도 기준)",
      "유료주차",
      "샤워실",
      "냉난방"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "실내라 저녁 이용 가능하나 '예약 잡기 쉽지 않다'는 후기, 행사일 주차 혼잡"
      ],
      "weekend": [
        "meh",
        "인기 코트라 경쟁 치열, 베이스라인 뒤 공간이 좁다는 후기 다수"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 약 55,000~66,000원대 (기준 시간 확인 필요)"
      ],
      [
        "주차",
        "10분당 1,000원, 최대 30,000원"
      ]
    ],
    "booking": [
      "KBS스포츠월드 홈페이지에서는 예약 불가 — 스매시 앱에서 시간대 검색 후 예약(휴대폰 인증 필요)",
      "카카오톡 채널 'KBS스포츠월드_실내테니스장' 운영"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/989a9282-5988-4e87-9f44-8920e3fd4d2e",
      "info": "https://pf.kakao.com/_xlxmfwG",
      "tel": "010-3146-8520"
    },
    "sources": [
      "https://checkmate-life.com/entry/%EC%84%9C%EC%9A%B8%EC%8B%A4%EB%82%B4%ED%85%8C%EB%8B%88%EC%8A%A4%EC%9E%A5-%EC%B6%94%EC%B2%9C-KBS-%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%94%EB%93%9C-%EC%9D%B4%EC%9A%A9%ED%9B%84%EA%B8%B0-%EB%B0%8F-%EC%98%88%EC%95%BD%EB%B0%A9%EB%B2%95",
      "https://smaxh.com/ko-KR/courts/989a9282-5988-4e87-9f44-8920e3fd4d2e",
      "http://www.tennispeople.kr/news/articleView.html?idxno=14786",
      "https://pf.kakao.com/_xlxmfwG"
    ],
    "transit_gongdeok": {
      "min": 32,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 급행 → 가양 (3정거장) + 도보 약 13분 (또는 버스 환승)"
    }
  },
  {
    "id": "vtg-yeouido-indoor",
    "name": "VTG 여의도 실내테니스",
    "type": "private",
    "operator": "VTG 실내테니스",
    "address": "서울 영등포구 여의나루로 42 여의도종합상가 4층",
    "lat": 37.52136,
    "lng": 126.92501,
    "approx": false,
    "transit": {
      "min": 10,
      "route": "5호선 영등포구청→여의도역(3정거장), 5번 출구 앞"
    },
    "tags": [
      "실내",
      "약 150평",
      "레슨",
      "역세권"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "06~22시 운영으로 퇴근 후 이용 가능하나, 풀코트 대관 가능 여부·규격 확인 필요"
      ],
      "weekend": [
        "meh",
        "레슨 중심 시설일 수 있어 대관 가능 시간 전화 확인 필요"
      ]
    },
    "prices": [
      [
        "요금",
        "확인 필요"
      ]
    ],
    "booking": [
      "전화·문자 예약/레슨 문의 (070-7756-2615)"
    ],
    "links": {
      "reserve": "",
      "info": "https://www.facebook.com/VTGTennis/",
      "tel": "070-7756-2615"
    },
    "sources": [
      "https://www.facebook.com/VTGTennis/",
      "https://vymaps.com/KR/VTG-325035341507416/",
      "https://smaxh.com/ko-KR/courts/ecf68db8-2a50-43c9-bc38-1aaf5909b61e"
    ],
    "transit_gongdeok": {
      "min": 11,
      "route": "5호선 공덕 → 여의도 (3정거장), 5번 출구 앞"
    }
  },
  {
    "id": "cut-tennis-hongdae",
    "name": "컷테니스 홍대점",
    "type": "private",
    "operator": "컷테니스(CUT)",
    "address": "서울 마포구 와우산로 48 지하1층 (상수동)",
    "lat": 37.54853,
    "lng": 126.92342,
    "approx": false,
    "transit": {
      "min": 15,
      "route": "2호선 영등포구청→합정(2정거장) 환승 → 6호선 상수역(1정거장) → 도보 약 2분"
    },
    "tags": [
      "실내(하프코트 레슨장)",
      "루프탑 야외코트",
      "볼머신",
      "냉난방",
      "샤워실",
      "건물 지하주차장 무료"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "실내는 레슨용 하프코트, 게임은 루프탑 코트 — 루프탑 대관 가능 시간 확인 필요"
      ],
      "weekend": [
        "meh",
        "주말엔 루프탑에서 초보 게임 클럽 운영. 루프탑은 벽이 있어 정식 복식이 어렵다는 운영사 글(과거)과 '사이드만 주의하면 게임 가능' 후기가 공존"
      ]
    },
    "prices": [
      [
        "요금",
        "확인 필요"
      ]
    ],
    "booking": [
      "스매시 앱 예약 연동(예약 코트 등록)",
      "전화 문의 010-5766-3141"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/d52f7499-8a58-496e-845e-bd47b71adcc8",
      "info": "https://opencourt.kr/courts/%EC%BB%B7%ED%85%8C%EB%8B%88%EC%8A%A4-%ED%99%8D%EB%8C%80%EC%A0%90",
      "tel": "010-5766-3141"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/d52f7499-8a58-496e-845e-bd47b71adcc8",
      "https://www.threads.com/@cuttennis_official/post/DBnzD4mvbFS",
      "https://opencourt.kr/courts/%EC%BB%B7%ED%85%8C%EB%8B%88%EC%8A%A4-%ED%99%8D%EB%8C%80%EC%A0%90"
    ],
    "transit_gongdeok": {
      "min": 11,
      "route": "6호선 공덕 → 상수 (3정거장) + 도보 약 2분"
    }
  },
  {
    "id": "seoul-tech-hs-daebang",
    "name": "서울공고 테니스장",
    "type": "private",
    "operator": "서울공업고등학교 코트 (스매시 제휴 대관)",
    "address": "서울 동작구 대방동1길 46",
    "lat": 37.50141,
    "lng": 126.92324,
    "approx": false,
    "transit": {
      "min": 25,
      "route": "5호선 영등포구청→신길(2정거장) 환승 → 1호선 대방역(1정거장) → 도보 약 15분 (또는 신림선 서울지방병무청역 도보 약 7분)"
    },
    "tags": [
      "야외",
      "클레이",
      "학교 코트",
      "조명",
      "주차"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "야간 조명 있음('조명이 좋아요' 리뷰 키워드). 학교 코트라 주차 편함"
      ],
      "weekend": [
        "ok",
        "스매시로 예약. 모래 관리·불규칙 바운드, 베이스라인 뒤가 짧다는 후기"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 10,000원부터 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/cb2a4b23-b10b-4dc9-af8a-e320b7269faa",
      "info": "https://smaxh.com/ko-KR/courts/cb2a4b23-b10b-4dc9-af8a-e320b7269faa",
      "tel": "010-8779-5301"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/cb2a4b23-b10b-4dc9-af8a-e320b7269faa"
    ],
    "transit_gongdeok": {
      "min": 33,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 대방 (1정거장) + 도보 약 15분 (또는 신림선 서울지방병무청역 도보 약 7분)"
    }
  },
  {
    "id": "jungang-girls-hs-ahyeon",
    "name": "중앙여고 테니스장",
    "type": "private",
    "operator": "중앙여자고등학교 코트 (스매시 제휴 대관)",
    "address": "서울 서대문구 북아현로11가길 7",
    "lat": 37.56274,
    "lng": 126.95344,
    "approx": false,
    "transit": {
      "min": 25,
      "route": "2호선 영등포구청→아현역(6정거장) → 도보 약 9분"
    },
    "tags": [
      "야외",
      "하드코트",
      "학교 코트",
      "조명",
      "다면"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "조명 있음, '낮보다 밤이 좋다'는 후기"
      ],
      "weekend": [
        "ok",
        "코트 리뉴얼 후 배수 양호하다는 후기. 일부 시간대 연대관 팀과 겹쳐 코트 안내가 부족했다는 후기 있음"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 44,000원 (기준 시간 확인 필요, '야외치고 비싸다'는 후기)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/8088e3af-2940-4fe0-915e-0a4d118091c7",
      "info": "https://smaxh.com/ko-KR/courts/8088e3af-2940-4fe0-915e-0a4d118091c7",
      "tel": "010-5488-9464"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/8088e3af-2940-4fe0-915e-0a4d118091c7"
    ],
    "transit_gongdeok": {
      "min": 22,
      "route": "5호선 공덕 → 충정로 (2정거장) 환승 2호선 → 아현 (1정거장) + 도보 약 9분"
    }
  },
  {
    "id": "kolon-sporex-seocho",
    "name": "코오롱스포렉스 서초점 테니스장",
    "type": "private",
    "operator": "코오롱스포렉스",
    "address": "서울 서초구 서초대로70길 32",
    "lat": 37.49385,
    "lng": 127.02334,
    "approx": false,
    "transit": {
      "min": 40,
      "route": "2호선 영등포구청→교대역(13정거장) → 도보 약 11분"
    },
    "tags": [
      "실내",
      "옥상층(4층, 엘리베이터 없음)",
      "샤워실",
      "냉난방",
      "스포츠클럽"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "실내지만 편도 40분 내외, 요금 높음"
      ],
      "weekend": [
        "meh",
        "스매시에서 비회원 예약 가능 여부·시간 확인 필요"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 100,000원 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약 (스매시 제휴 코트)",
      "전화 02-580-8300"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/c669425c-0ab2-4978-87ad-0310dc9e2406",
      "info": "https://smaxh.com/ko-KR/courts/c669425c-0ab2-4978-87ad-0310dc9e2406",
      "tel": "02-580-8300"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/c669425c-0ab2-4978-87ad-0310dc9e2406"
    ],
    "transit_gongdeok": {
      "min": 37,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 고속터미널 (3정거장) 환승 3호선 → 교대 (1정거장) + 도보 약 11분"
    }
  },
  {
    "id": "sangam-sanjang-deogeun",
    "name": "상암산장테니스장",
    "type": "private",
    "operator": "상암산장테니스장 (사설 단독 코트)",
    "address": "경기 고양시 덕양구 덕은로 8-7",
    "lat": 37.58984,
    "lng": 126.87553,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "2호선 영등포구청→합정 환승 → 6호선 디지털미디어시티(4정거장) → 버스로 덕은동 이동 후 도보 (추정)"
    },
    "tags": [
      "야외",
      "인조잔디",
      "1면(단독 코트)",
      "조명",
      "주차"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "조명이 다소 어둡다는 후기, 편도 40분 이상"
      ],
      "weekend": [
        "ok",
        "단독 코트라 랠리·게임 편하고 주차 쉬움. 노후화·정비 부족 후기 있음"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 12,500원부터 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/865ff9f6-f355-4325-9da0-c808a613b6c0",
      "info": "https://smaxh.com/ko-KR/courts/865ff9f6-f355-4325-9da0-c808a613b6c0",
      "tel": "010-2229-1716"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/865ff9f6-f355-4325-9da0-c808a613b6c0"
    ],
    "transit_gongdeok": {
      "min": 30,
      "route": "공항철도 공덕 → 디지털미디어시티 (2정거장) + 버스로 덕은동 이동 후 도보 (추정)"
    }
  },
  {
    "id": "air-court-kau-hwajeon",
    "name": "Air Court 한국항공대 테니스장",
    "type": "private",
    "operator": "Air Court (한국항공대 코트 위탁 운영)",
    "address": "경기 고양시 덕양구 항공대학로 76",
    "lat": 37.6022,
    "lng": 126.86597,
    "approx": false,
    "transit": {
      "min": 38,
      "route": "2호선 영등포구청→홍대입구(3정거장) 환승 → 경의중앙선 화전역(4정거장, 배차 간격 김) → 역 바로 앞"
    },
    "tags": [
      "야외",
      "다면",
      "샤워실",
      "탈의실",
      "주차",
      "역세권"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "역 앞이라 접근은 좋지만 경의중앙선 배차가 길어 편도 40분 안팎"
      ],
      "weekend": [
        "ok",
        "코트 넓고 부대시설 깨끗하다는 후기"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 27,500원부터 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/86a5342d-bc5e-432b-9b25-c1278b6e6956",
      "info": "https://smaxh.com/ko-KR/courts/86a5342d-bc5e-432b-9b25-c1278b6e6956",
      "tel": "010-2635-4698"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/86a5342d-bc5e-432b-9b25-c1278b6e6956"
    ],
    "transit_gongdeok": {
      "min": 28,
      "route": "경의중앙선 공덕 → 화전 (6정거장, 배차 간격 김) → 역 바로 앞"
    }
  },
  {
    "id": "tennisbeat-gangseo-gaehwa",
    "name": "테니스비트 강서개화점 (실내)",
    "type": "private",
    "operator": "테니스비트",
    "address": "인천 계양구 벌말로573번길 14",
    "lat": 37.58028,
    "lng": 126.77814,
    "approx": false,
    "transit": {
      "min": 55,
      "route": "2호선 영등포구청→당산 환승 → 9호선 개화역 → 버스/도보 약 20분 (추정)"
    },
    "tags": [
      "실내",
      "1면",
      "냉난방",
      "주차 넉넉",
      "프라이빗"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "대중교통 편도 약 1시간, 차량 이용자 위주"
      ],
      "weekend": [
        "meh",
        "랠리·서브 연습엔 좋으나 베이스라인 뒤·층고가 낮아 게임 시 주의(후기)"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 28,000원부터 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/663921bd-11a6-4f9f-a4c5-b3bce5052a4e",
      "info": "https://smaxh.com/ko-KR/courts/663921bd-11a6-4f9f-a4c5-b3bce5052a4e",
      "tel": "010-9353-1187"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/663921bd-11a6-4f9f-a4c5-b3bce5052a4e"
    ],
    "transit_gongdeok": {
      "min": 45,
      "route": "공항철도 공덕 → 김포공항 (4정거장) 환승 9호선 → 개화 (1정거장) + 버스/도보 약 20분 (추정)"
    }
  },
  {
    "id": "song-tennis-camp-daeya",
    "name": "송 테니스 캠프",
    "type": "private",
    "operator": "송 테니스 캠프",
    "address": "경기 시흥시 대야동 210-18",
    "lat": 37.45392,
    "lng": 126.79398,
    "approx": false,
    "transit": {
      "min": 48,
      "route": "2호선 영등포구청→신도림 환승 → 1호선 소사역(7정거장) 환승 → 서해선 시흥대야역(2정거장) → 도보 약 7분 (추정)"
    },
    "tags": [
      "루프탑 야외",
      "실내",
      "냉난방",
      "주차",
      "조명"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "편도 50분 가까이, 조명 눈부심 후기"
      ],
      "weekend": [
        "ok",
        "코트 넓고 뷰 좋다는 후기, 루프탑 대기 공간 별도"
      ]
    },
    "prices": [
      [
        "코트 요금",
        "스매시 표시가 20,000원부터 (기준 시간 확인 필요)"
      ]
    ],
    "booking": [
      "스매시 앱/웹에서 예약·결제 (스매시 제휴 코트)"
    ],
    "links": {
      "reserve": "https://smaxh.com/ko-KR/courts/184addb9-8309-4e85-b3a2-fd040536111b",
      "info": "https://smaxh.com/ko-KR/courts/184addb9-8309-4e85-b3a2-fd040536111b",
      "tel": "010-7480-4644"
    },
    "sources": [
      "https://smaxh.com/ko-KR/courts/184addb9-8309-4e85-b3a2-fd040536111b"
    ],
    "transit_gongdeok": {
      "min": 43,
      "route": "공항철도 공덕 → 김포공항 (4정거장) 환승 서해선 → 시흥대야 (5정거장) + 도보 약 7분 (추정)"
    }
  },
  {
    "id": "jamwon-hangang-tennis",
    "name": "잠원한강공원 테니스장",
    "type": "public",
    "operator": "서울시 미래한강본부 (위탁운영: 123테니스)",
    "address": "서울특별시 서초구 잠원로 221-124 (잠원동, 잠원한강공원)",
    "lat": 37.52028,
    "lng": 127.01103,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 고속터미널 환승 3호선 → 신사 + 도보 약 15분"
    },
    "tags": [
      "한강공원",
      "야간조명",
      "서울시 공공예약"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 18~22시 야간 슬롯이 따로 있으나 조회 시점 예약마감"
      ],
      "weekend": [
        "meh",
        "주말·공휴일 08~22시 운영, 조회 시점 예약마감 (경쟁 치열)"
      ]
    },
    "prices": [
      [
        "기본 (1회 2시간 이내)",
        "8,000원 / 2시간"
      ],
      [
        "주말·공휴일 또는 조명 이용",
        "30% 가산 → 10,400원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약(yeyak.seoul.go.kr) 인터넷 선착순, 코트·시간대(평일주간/야간/주말)별로 월 단위 접수",
      "서울시 통합회원 가입 + 휴대폰 본인인증 필요, 대상 제한 없음",
      "1회 1코트, 이용일 1일 전까지 취소 가능"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260929082319244681",
      "info": "https://seoul-tennis.com/seocho-gu",
      "tel": "010-8979-6596"
    },
    "sources": [
      "https://seoul-tennis.com/seocho-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260929082319244681",
      "https://hangang.seoul.go.kr/www/contents/777.do?mid=516"
    ],
    "transit_gongdeok": {
      "min": 39,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 고속터미널 (3정거장) 환승 3호선 → 잠원 (1정거장) + 도보 약 13분"
    }
  },
  {
    "id": "banpo-sports-complex-tennis",
    "name": "반포종합운동장 테니스장",
    "type": "public",
    "operator": "서초구 (서초 공공체육시설)",
    "address": "서울특별시 서초구 신반포로16길 30 (반포동, 반포종합운동장)",
    "lat": 37.50095,
    "lng": 126.99553,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "5호선 영등포구청 → 여의도 환승 9호선(일반) → 신반포 + 도보 약 5분"
    },
    "tags": [
      "인조잔디",
      "12면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 06~22시 운영, 야간 조명 사용 가능(별도 요금)"
      ],
      "weekend": [
        "ok",
        "토·일·공휴일 06~20시 운영"
      ]
    },
    "prices": [
      [
        "평일",
        "1시간 9,000원"
      ],
      [
        "토·일·공휴일",
        "1시간 11,000원"
      ],
      [
        "조명 사용료",
        "1시간 3,000원 추가"
      ]
    ],
    "booking": [
      "서초구 통합 온라인 예약 (seoul-tennis.com 기준 외부예약: 더테니스플레이)",
      "이용일 1주 전 오전 9시 예약 오픈 (주말·공휴일 포함)",
      "환불: 3일 전 100%, 1~2일 전 50%, 당일 불가"
    ],
    "links": {
      "reserve": "https://www.thetennisplay.com",
      "info": "https://www.seocho.go.kr/sports/fmcs/146",
      "tel": "02-536-0555"
    },
    "sources": [
      "https://seoul-tennis.com/seocho-gu",
      "https://www.seocho.go.kr/sports/fmcs/146",
      "https://www.ktriptips.com/kor/leisure/2733973"
    ],
    "transit_gongdeok": {
      "min": 33,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선(일반) → 신반포 (7정거장) + 도보 약 5분"
    }
  },
  {
    "id": "yangjae-citizens-forest-tennis",
    "name": "매헌시민의숲 양재테니스장",
    "type": "public",
    "operator": "서초구 (서초 공공체육시설)",
    "address": "서울특별시 서초구 양재동 매헌시민의숲 내 (상세 도로명주소 확인 필요)",
    "lat": 37.4729,
    "lng": 127.0358,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 신논현 환승 신분당선 → 양재시민의숲 + 도보 약 8분"
    },
    "tags": [
      "실외 8면",
      "실내 3면",
      "실내",
      "인조잔디",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 실외 야간조명(별도) 또는 실내코트 이용 가능"
      ],
      "weekend": [
        "ok",
        "토·일·공휴일 06~22시 운영"
      ]
    },
    "prices": [
      [
        "실외 평일",
        "1시간 9,000원 (야간조명 2,000원 별도)"
      ],
      [
        "실외 토·일·공휴일",
        "1시간 11,000원 (야간조명 2,000원 별도)"
      ],
      [
        "실내 평일",
        "1시간 27,000원 (조명료 포함)"
      ],
      [
        "실내 토·일·공휴일",
        "1시간 31,000원 (조명료 포함)"
      ]
    ],
    "booking": [
      "네이버 예약 ('양재테니스장 예약' 검색)",
      "예약 오픈 시점·비구민 제한 여부는 확인 필요"
    ],
    "links": {
      "reserve": "https://booking.naver.com/booking/10/bizes/210031",
      "info": "https://www.seocho.go.kr/sports/fmcs/60",
      "tel": "02-2155-6216"
    },
    "sources": [
      "https://seoul-tennis.com/seocho-gu",
      "https://www.seocho.go.kr/sports/fmcs/60",
      "https://mediahub.seoul.go.kr/archives/2007458"
    ],
    "transit_gongdeok": {
      "min": 40,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 신논현 (4정거장) 환승 신분당선 → 양재시민의숲 (3정거장) + 도보 약 8분"
    }
  },
  {
    "id": "bongeun-tennis",
    "name": "봉은테니스장",
    "type": "public",
    "operator": "강남구도시관리공단",
    "address": "서울특별시 강남구 봉은사로 513 (삼성동 75)",
    "lat": 37.5139,
    "lng": 127.0555,
    "approx": false,
    "transit": {
      "min": 40,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 봉은사 + 도보 약 6분"
    },
    "tags": [
      "클레이",
      "4면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 조명 있음"
      ],
      "weekend": [
        "ok",
        "주말 06~22시 운영 (공휴일 휴관)"
      ]
    },
    "prices": [
      [
        "이용료",
        "6,000원 (기본 1시간 단위 예약 — 단위는 확인 필요)"
      ]
    ],
    "booking": [
      "강남구 통합예약(life.gangnam.go.kr) 온라인 신청, 1시간 단위로 최대 8회까지 신청",
      "관리자 승인 후 48시간 내 결제, 온라인 신청은 매월 25일까지 (26일 이후는 시설 전화 문의)",
      "공휴일(설·추석 포함) 휴관, 주차 제한"
    ],
    "links": {
      "reserve": "https://life.gangnam.go.kr/fmcs/54",
      "info": "https://info.koreacharts.com/facility/106044/contents.html",
      "tel": "02-2176-0890"
    },
    "sources": [
      "https://seoul-tennis.com/gangnam-gu",
      "https://life.gangnam.go.kr/fmcs/54",
      "https://info.koreacharts.com/facility/106044/contents.html"
    ],
    "transit_gongdeok": {
      "min": 34,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 급행 → 봉은사 (6정거장) + 도보 약 6분"
    }
  },
  {
    "id": "daechi-yusuji-tennis",
    "name": "대치유수지체육공원 테니스장",
    "type": "public",
    "operator": "강남구청 (대치유수지체육공원)",
    "address": "서울특별시 강남구 역삼로107길 20-30 (대치동)",
    "lat": 37.5023,
    "lng": 127.0691,
    "approx": false,
    "transit": {
      "min": 52,
      "route": "2호선 영등포구청 → 삼성 (강남 방면 직행) + 도보 약 12분"
    },
    "tags": [
      "하드코트",
      "3면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "07~21시 운영, 야간 이용 가능"
      ],
      "weekend": [
        "meh",
        "주말 운영·예약 가능 여부 확인 필요"
      ]
    },
    "prices": [
      [
        "주중",
        "18,000원 / 1면 2시간"
      ],
      [
        "주말",
        "20,000원 / 1면 2시간"
      ],
      [
        "주중 조명 포함",
        "34,000원 / 1면 2시간"
      ],
      [
        "주말 조명 포함",
        "36,000원 / 1면 2시간"
      ]
    ],
    "booking": [
      "대치유수지체육공원 전용 예약 사이트에서 예약",
      "취소는 영업일 기준 3일 전까지 전액 환불",
      "전용 주차장 없음"
    ],
    "links": {
      "reserve": "http://www.xn--vk1b79znxd34c61h.kr",
      "info": "https://seoul-tennis.com/gangnam-gu",
      "tel": "02-2051-2285"
    },
    "sources": [
      "https://seoul-tennis.com/gangnam-gu",
      "http://www.xn--vk1b79znxd34c61h.kr"
    ],
    "transit_gongdeok": {
      "min": 42,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 종합운동장 (7정거장) + 도보 약 17분"
    }
  },
  {
    "id": "maru-park-tennis",
    "name": "마루공원 테니스장",
    "type": "public",
    "operator": "서울물재생시설공단",
    "address": "서울특별시 강남구 개포로 625 (일원동)",
    "lat": 37.4971,
    "lng": 127.08,
    "approx": false,
    "transit": {
      "min": 55,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 고속터미널 환승 3호선 → 학여울 + 도보 약 10분"
    },
    "tags": [
      "인조잔디",
      "3면",
      "야간조명",
      "주간 무료"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "조명 시간대는 별도 유료 슬롯이며 조회 시점 예약마감"
      ],
      "weekend": [
        "meh",
        "06~22시 무료 코트지만 월 2회·1회 최대 2시간 제한, 경쟁 있음"
      ]
    },
    "prices": [
      [
        "이용료",
        "무료 (조명시설 있음, 별도 조명료 표기 없음)"
      ],
      [
        "이용 단위",
        "1회 1시간, 최대 2시간 · 월 2회"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 인터넷 선착순 (면별 별도)",
      "이용일 14일 전 14시 오픈 ~ 1일 전 23시 마감",
      "대상 제한 없음 (인접 탄천물재생센터 코트는 일원1·개포3동 주민 전용이라 제외)",
      "1팀 2~99명, 월 2회 한도"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S210205141719898815",
      "info": "https://seoul-tennis.com/gangnam-gu",
      "tel": "02-445-9705"
    },
    "sources": [
      "https://seoul-tennis.com/gangnam-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S210205141719898815"
    ],
    "transit_gongdeok": {
      "min": 47,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 고속터미널 환승 3호선 → 대청 (8정거장) + 도보 약 7분"
    }
  },
  {
    "id": "dongbu-road-office-tennis",
    "name": "동부도로사업소 테니스장",
    "type": "public",
    "operator": "서울시 동부도로사업소 (위탁운영자 운영)",
    "address": "서울특별시 강남구 남부순환로 3142-33 (대치동)",
    "lat": 37.4974,
    "lng": 127.0757,
    "approx": true,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 고속터미널 환승 3호선 → 학여울 + 도보 약 6분"
    },
    "tags": [
      "인조잔디",
      "1면(A코트)",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 야간(18~22시) 슬롯 별도 접수, 조회 시점 접수중"
      ],
      "weekend": [
        "meh",
        "주말·공휴일 06~22시 슬롯 있으나 조회 시점 예약마감"
      ]
    },
    "prices": [
      [
        "요금",
        "유료 — 금액 확인 필요"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 인터넷 선착순, 반월 단위(1~15일/16~31일)로 평일주간·평일야간·주말 슬롯 따로 접수",
      "예약 후 1시간 내 결제하지 않으면 자동 취소",
      "도로사업소 정문 출입 금지 — 테니스장 문으로 출입"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261008132145262455",
      "info": "https://seoul-tennis.com/gangnam-gu",
      "tel": "010-5488-9464"
    },
    "sources": [
      "https://seoul-tennis.com/gangnam-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261008132145262455",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S261008132006245619"
    ],
    "transit_gongdeok": {
      "min": 44,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 고속터미널 환승 3호선 → 학여울 (7정거장) + 도보 약 6분"
    }
  },
  {
    "id": "seoul-forest-tennis",
    "name": "서울숲 테니스장",
    "type": "public",
    "operator": "서울숲 (서울시)",
    "address": "서울특별시 성동구 뚝섬로 273 (성수동1가)",
    "lat": 37.5466,
    "lng": 127.0401,
    "approx": false,
    "transit": {
      "min": 47,
      "route": "2호선 영등포구청 → 뚝섬 (시청·왕십리 방면 직행) + 도보 약 8분"
    },
    "tags": [
      "인조잔디",
      "5면",
      "조명 없음"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "조명 없음, 3~10월 19시·11~2월 17시 종료"
      ],
      "weekend": [
        "ok",
        "주말 3~10월 06~19시, 11~2월 08~17시"
      ]
    },
    "prices": [
      [
        "평일",
        "1시간 4,000원"
      ],
      [
        "주말·공휴일",
        "1시간 5,200원"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 인터넷 선착순 (평일/주말 따로)",
      "이용일 30일 전 09시 오픈 ~ 당일 24시",
      "1일 2시간, 월 평일 15회·주말 8회 한도",
      "65세 이상·장애인 등 최대 50% 감면"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251203104822013240",
      "info": "https://seoul-tennis.com/seongdong-gu",
      "tel": "02-460-2983"
    },
    "sources": [
      "https://seoul-tennis.com/seongdong-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251203104822013240"
    ],
    "transit_gongdeok": {
      "min": 37,
      "route": "경의중앙선 공덕 → 왕십리 (8정거장) 환승 수인분당선 → 서울숲 (1정거장) + 도보 약 8분"
    }
  },
  {
    "id": "eungbong-park-daehyeonsan-tennis",
    "name": "응봉공원 테니스장 (대현산배수지)",
    "type": "public",
    "operator": "응봉공원관리사무소 (서울시)",
    "address": "서울특별시 성동구 금호로 172-1 (금호동1가)",
    "lat": 37.55602,
    "lng": 127.02146,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "5호선 영등포구청 → 신금호 (직행) + 도보 약 8분 (오르막)"
    },
    "tags": [
      "인조잔디",
      "테니스장1·2 (각 2면)"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "3~10월 07~19시, 11~2월 08~17시 운영 (조명 정보 없음)"
      ],
      "weekend": [
        "meh",
        "주말 슬롯 있으나 조회 시점 예약마감"
      ]
    },
    "prices": [
      [
        "평일",
        "1시간 4,000원 (2시간 초과 시 1시간당 2,000원)"
      ],
      [
        "주말·공휴일",
        "1시간 5,200원 (2시간 초과 시 1시간당 2,600원)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 인터넷 선착순 (테니스장1/2, 평일/주말 따로)",
      "이용일 30일 전 09시 오픈 ~ 당일 24시",
      "최대 연속 4시간, 이용일 1일 전까지 취소",
      "대상 제한 없음"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251121100349891778",
      "info": "https://seoul-tennis.com/seongdong-gu",
      "tel": "02-2293-7646"
    },
    "sources": [
      "https://seoul-tennis.com/seongdong-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251121100349891778"
    ],
    "transit_gongdeok": {
      "min": 29,
      "route": "5호선 공덕 → 신금호 (9정거장) + 도보 약 8분 (오르막)"
    }
  },
  {
    "id": "eungbong-sports-park-tennis",
    "name": "응봉테니스장 (응봉체육공원)",
    "type": "public",
    "operator": "성동구도시관리공단",
    "address": "서울특별시 성동구 응봉동 240-1 (응봉체육공원, 중랑천변)",
    "lat": 37.55137,
    "lng": 127.0365,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "2호선 영등포구청 → 한양대 (시청·왕십리 방면 직행) + 도보 약 12분"
    },
    "tags": [
      "인조잔디",
      "6면",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 조명 사용 가능(별도 신청)"
      ],
      "weekend": [
        "ok",
        "06~22시, 단 타 구민은 2차 수시대관(잔여분)만 가능"
      ]
    },
    "prices": [
      [
        "평일",
        "2시간 10,000원"
      ],
      [
        "주말·공휴일",
        "2시간 13,000원 (30% 할증)"
      ],
      [
        "조명",
        "2시간 3,000원 추가 (대관 시 별도 신청)"
      ]
    ],
    "booking": [
      "성동구도시관리공단 체육시설 사이트 대관 신청 (서울시 통합회원 로그인)",
      "수시대관 1차(성동구민) 매월 21일 10시~말일, 2차(타 구민)는 사용월 접수 — 타 구민은 잔여 슬롯만",
      "1일 최대 4시간, 휴관: 신정·설·추석"
    ],
    "links": {
      "reserve": "https://sports.happysd.or.kr/fmcs/168",
      "info": "https://sports.happysd.or.kr/fmcs/181",
      "tel": "02-2204-7676"
    },
    "sources": [
      "https://seoul-tennis.com/seongdong-gu",
      "https://sports.happysd.or.kr/fmcs/168",
      "https://sports.happysd.or.kr/fmcs/181",
      "https://www.ktriptips.com/kor/tourspot/2757822"
    ],
    "transit_gongdeok": {
      "min": 26,
      "route": "경의중앙선 공덕 → 응봉 (7정거장, 배차 간격 김) + 도보 약 5분"
    }
  },
  {
    "id": "majang-tennis",
    "name": "마장테니스장",
    "type": "public",
    "operator": "성동구도시관리공단 (마장국민체육센터)",
    "address": "서울특별시 성동구 마장동 (마장국민체육센터 인근, 상세주소 확인 필요)",
    "lat": 37.56418,
    "lng": 127.03892,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 마장 (직행) + 도보 약 7분"
    },
    "tags": [
      "클레이",
      "2면"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "09~18시 운영"
      ],
      "weekend": [
        "meh",
        "09~18시, 주말 운영·타 구민 배정 확인 필요"
      ]
    },
    "prices": [
      [
        "평일 09~18시",
        "10,000원 / 1면 2시간"
      ],
      [
        "토·일·공휴일 09~18시",
        "13,000원 / 1면 2시간 (주말 30% 할증)"
      ]
    ],
    "booking": [
      "성동구도시관리공단 체육시설 사이트 대관 신청",
      "세부 대관 규칙 확인 필요"
    ],
    "links": {
      "reserve": "https://sports.happysd.or.kr/fmcs/192",
      "info": "https://seoul-tennis.com/seongdong-gu",
      "tel": "02-2204-7640"
    },
    "sources": [
      "https://seoul-tennis.com/seongdong-gu",
      "https://sports.happysd.or.kr/fmcs/192"
    ],
    "transit_gongdeok": {
      "min": 34,
      "route": "5호선 공덕 → 마장 (12정거장) + 도보 약 7분"
    }
  },
  {
    "id": "ttukseom-hangang-tennis",
    "name": "뚝섬한강공원 테니스장",
    "type": "public",
    "operator": "서울시 미래한강본부 (위탁운영: 123테니스)",
    "address": "서울특별시 광진구 자양동 410-1 (뚝섬한강공원)",
    "lat": 37.5276,
    "lng": 127.0775,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 고속터미널 환승 7호선 → 자양(뚝섬한강공원) + 도보 약 8분"
    },
    "tags": [
      "클레이",
      "4면",
      "야간조명",
      "한강공원"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 18~22시 야간 슬롯 있으나 조회 시점 예약마감"
      ],
      "weekend": [
        "meh",
        "주말·공휴일 08~22시, 조회 시점 예약마감"
      ]
    },
    "prices": [
      [
        "기본",
        "2시간 8,000원"
      ],
      [
        "주말·공휴일 또는 조명 이용",
        "30% 가산 (2시간 약 10,400원)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 인터넷 선착순, 월 단위 접수(전월 말 20시경 오픈)",
      "서울시 통합회원 + 본인인증, 대상 제한 없음",
      "이용일 1일 전까지 취소"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260929074034595016",
      "info": "https://hangang.seoul.go.kr/www/contents/777.do?mid=516",
      "tel": "010-5525-2026"
    },
    "sources": [
      "https://seoul-tennis.com/gwangjin-gu",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260929074034595016",
      "https://hangang.seoul.go.kr/www/contents/777.do?mid=516"
    ],
    "transit_gongdeok": {
      "min": 46,
      "route": "5호선 공덕 → 여의도 환승 9호선 급행 → 고속터미널 환승 7호선 → 자양(뚝섬한강공원) (6정거장) + 도보 약 10분"
    }
  },
  {
    "id": "childrens-grand-park-tennis",
    "name": "서울어린이대공원 테니스장",
    "type": "public",
    "operator": "서울시설공단 서울어린이대공원",
    "address": "서울특별시 광진구 능동로 216 (서울어린이대공원)",
    "lat": 37.54759,
    "lng": 127.08021,
    "approx": false,
    "transit": {
      "min": 55,
      "route": "5호선 영등포구청 → 여의도 환승 9호선 급행 → 고속터미널 환승 7호선 → 어린이대공원 + 도보 약 8분"
    },
    "tags": [
      "인조잔디",
      "실외 2면",
      "실내 1면",
      "실내",
      "주차 가능"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 16~22시 야간 슬롯 있으나 조회 시점 전부 예약마감"
      ],
      "weekend": [
        "meh",
        "주말 06~22시 슬롯 있으나 조회 시점 예약마감"
      ]
    },
    "prices": [
      [
        "실외 평일",
        "2시간 8,000원"
      ],
      [
        "실외 주말·공휴일·야간",
        "2시간 10,400원"
      ],
      [
        "실내 평일",
        "2시간 25,000원"
      ],
      [
        "실내 주말·공휴일·야간",
        "2시간 32,500원"
      ],
      [
        "2시간 초과",
        "시간당 요금 50% 할인"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 (A코트/B코트, 주간·야간 슬롯별)",
      "조회 시점 전 슬롯 예약마감 — 오픈 시점 공략 필요"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/search/selectPageListDetailSearchImg.do?code=T100&dCode=T108",
      "info": "https://sisul.or.kr/open_content/childrenpark/guidance/facility/rent_tennis.jsp",
      "tel": "02-450-9335"
    },
    "sources": [
      "https://seoul-tennis.com/gwangjin-gu",
      "https://sisul.or.kr/open_content/childrenpark/guidance/facility/rent_tennis.jsp"
    ],
    "transit_gongdeok": {
      "min": 48,
      "route": "5호선 공덕 → 군자 (15정거장) 환승 7호선 → 어린이대공원 (1정거장) + 도보 약 8분"
    }
  },
  {
    "id": "bucheon-stadium-tennis",
    "name": "부천종합운동장 테니스장",
    "type": "public",
    "operator": "부천시체육회",
    "address": "경기도 부천시 원미구 춘의동 부천종합운동장 내 (상세주소 확인 필요)",
    "lat": 37.50254,
    "lng": 126.79901,
    "approx": false,
    "transit": {
      "min": 37,
      "route": "2호선 영등포구청 → 대림 환승 7호선 → 부천종합운동장 + 도보 약 5분"
    },
    "tags": [
      "하드코트",
      "13면",
      "야간조명",
      "관외 이용 가능"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "야간 18~22시 (2시간 2타임) 예약 가능"
      ],
      "weekend": [
        "ok",
        "06~22시, 2시간 단위"
      ]
    },
    "prices": [
      [
        "평일 주간(06~18시)",
        "2시간 6,000원"
      ],
      [
        "평일 야간(18~22시)",
        "2시간 11,000원"
      ],
      [
        "주말·공휴일 주간",
        "2시간 8,000원"
      ],
      [
        "주말·공휴일 야간",
        "2시간 15,000원"
      ]
    ],
    "booking": [
      "부천시 공공서비스예약(reserv.bucheon.go.kr), 2시간 단위",
      "매월 20일 10시 다음 달 예약 오픈 (20일이 주말이면 다음 월요일)",
      "1일 1코트 1타임, 72시간 내 결제(계좌이체/카드)",
      "관외(비부천시민) 제한·할증 언급 없음"
    ],
    "links": {
      "reserve": "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=115&inst_cate=01",
      "info": "https://reserv.bucheon.go.kr/site/main/lending/lendingList?lending_inst_nm=tennis&inst_cate=01",
      "tel": "070-7711-5309"
    },
    "sources": [
      "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=115&inst_cate=01",
      "https://reserv.bucheon.go.kr/site/main/lending/lendingList?lending_inst_nm=tennis&inst_cate=01"
    ],
    "transit_gongdeok": {
      "min": 36,
      "route": "공항철도 공덕 → 김포공항 (4정거장) 환승 서해선 → 부천종합운동장 (2정거장) + 도보 약 5분"
    }
  },
  {
    "id": "bucheon-gymnasium-tennis-hard",
    "name": "부천체육관 테니스장(하드)",
    "type": "public",
    "operator": "부천시체육회",
    "address": "경기도 부천시 원미구 석천로 293 일대 (부천체육관, 약대동/중4동)",
    "lat": 37.51273,
    "lng": 126.76304,
    "approx": false,
    "transit": {
      "min": 50,
      "route": "2호선 영등포구청 → 대림 환승 7호선 → 부천시청 + 도보 약 12분"
    },
    "tags": [
      "하드코트",
      "2면",
      "야간조명",
      "관외 이용 가능"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "야간 18~22시 예약 가능"
      ],
      "weekend": [
        "ok",
        "06~22시, 2시간 단위"
      ]
    },
    "prices": [
      [
        "평일 주간(06~18시)",
        "2시간 6,000원"
      ],
      [
        "평일 야간(18~22시)",
        "2시간 11,000원"
      ],
      [
        "주말·공휴일 주간",
        "2시간 8,000원"
      ],
      [
        "주말·공휴일 야간",
        "2시간 15,000원"
      ]
    ],
    "booking": [
      "부천시 공공서비스예약, 2시간 단위",
      "매월 20일 10시 다음 달 예약 오픈",
      "1일 1코트 1타임, 72시간 내 결제",
      "관외 제한·할증 언급 없음"
    ],
    "links": {
      "reserve": "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=192&inst_cate=01",
      "info": "https://reserv.bucheon.go.kr/site/main/lending/lendingList?lending_inst_nm=tennis&inst_cate=01",
      "tel": "070-7711-5309"
    },
    "sources": [
      "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=192&inst_cate=01"
    ],
    "transit_gongdeok": {
      "min": 52,
      "route": "공항철도 공덕 → 김포공항 환승 서해선 → 부천종합운동장 환승 7호선 → 부천시청 (3정거장) + 도보 약 12분"
    }
  },
  {
    "id": "bucheon-indoor-tennis",
    "name": "부천실내테니스장",
    "type": "public",
    "operator": "부천시테니스협회",
    "address": "경기도 부천시 원미구 석천로 293 (부천체육관 부지 내)",
    "lat": 37.5134,
    "lng": 126.7632,
    "approx": true,
    "transit": {
      "min": 50,
      "route": "2호선 영등포구청 → 대림 환승 7호선 → 부천시청 + 도보 약 12분"
    },
    "tags": [
      "실내",
      "하드코트",
      "3면",
      "관외 50% 가산"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "실내, 06~22시 (18~20·20~22시 타임)"
      ],
      "weekend": [
        "ok",
        "실내, 06~22시"
      ]
    },
    "prices": [
      [
        "평일",
        "2시간 30,000원"
      ],
      [
        "주말·공휴일",
        "2시간 40,000원"
      ],
      [
        "관외팀",
        "사용료 50% 가산 (팀원 절반 이상이 부천 거주·재직 입증 못 하면 관외)"
      ]
    ],
    "booking": [
      "부천시 공공서비스예약, 2시간 단위",
      "보통 매월 20일 19시 다음 달 예약 오픈",
      "개인 1일 1코트 1타임, 24시간 내 결제",
      "입장 시 신분증 확인 (관내/관외 판정)"
    ],
    "links": {
      "reserve": "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=195&inst_cate=01",
      "info": "http://www.lifetennis.org",
      "tel": "032-662-4567"
    },
    "sources": [
      "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail?lending_info_seq=195&inst_cate=01"
    ],
    "transit_gongdeok": {
      "min": 52,
      "route": "공항철도 공덕 → 김포공항 환승 서해선 → 부천종합운동장 환승 7호선 → 부천시청 (3정거장) + 도보 약 12분"
    }
  },
  {
    "id": "sindorim-tennis",
    "name": "신도림테니스장",
    "type": "public",
    "operator": "구로구 (서울시 공공서비스예약)",
    "address": "서울 구로구 신도림동 276-4",
    "lat": 37.50679,
    "lng": 126.88952,
    "approx": false,
    "transit": {
      "min": 22,
      "route": "2호선 영등포구청 → 신도림 (2정거장) + 도보 약 12분"
    },
    "tags": [
      "하드코트",
      "4면",
      "야외",
      "야간조명",
      "주차불가"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 17~19시·19~21시 슬롯 있음(21시 종료). 19~21시는 조기 마감되는 편"
      ],
      "weekend": [
        "meh",
        "주말 07~21시 운영하나 10월분 주말 슬롯 대부분 예약마감. 공휴일 휴관"
      ]
    },
    "prices": [
      [
        "평일 주간(07~19시)",
        "10,000원 / 1면 2시간"
      ],
      [
        "주말·공휴일 또는 야간(19시~)",
        "13,000원 / 1면 2시간 (30% 할증)"
      ],
      [
        "조명",
        "3,000원 / 1시간 별도"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약(yeyak.seoul.go.kr), 서울시 통합회원 필요",
      "월 단위 접수: 10월분은 9/25 07:00 오픈, 선착순",
      "1인(팀) 1회 1면 2시간, 당일 예약 불가, 취소는 1일 전까지",
      "B·C코트 대관 (A코트 이용 불가 공지), 라켓·공 대여 없음"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260917102150011798",
      "info": "https://seoul-tennis.com/guro-gu",
      "tel": "070-4944-4503"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260917102150011798",
      "https://seoul-tennis.com/guro-gu",
      "https://www.guro.go.kr/sports/"
    ],
    "transit_gongdeok": {
      "min": 32,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 신도림 (2정거장) + 도보 약 12분"
    }
  },
  {
    "id": "gyenam-park-tennis",
    "name": "계남근린공원 테니스장 (계남테니스장)",
    "type": "public",
    "operator": "구로구시설관리공단",
    "address": "서울 구로구 고척동 산6-1 계남근린공원 (구로구청 안내: 중앙로17길 10)",
    "lat": 37.50943,
    "lng": 126.85755,
    "approx": false,
    "transit": {
      "min": 32,
      "route": "2호선 영등포구청 → 신도림 (2정거장) → 신정지선 환승 양천구청 (2정거장) + 도보 약 10분"
    },
    "tags": [
      "실내",
      "하드코트",
      "실내 대관 2면(A·B)",
      "야외 인조잔디 1면",
      "야간조명(야외)",
      "주차 제한"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "실내 A·B 평일야간 슬롯 있으나 10월분 예약마감. 야외는 18~22시"
      ],
      "weekend": [
        "meh",
        "실내 주말 06~22시 슬롯 있으나 경쟁 치열(10월분 마감)"
      ]
    },
    "prices": [
      [
        "실내·야외 코트 대관",
        "확인 필요 (예약 페이지에 '유료'로만 표기)"
      ],
      [
        "야외 조명(19~22시)",
        "3,000원 / 1시간 추가"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 서울시 통합회원 필요",
      "월 단위 접수: 10월분은 9/30 07:00 오픈, 선착순, 이용 전날 23시 마감",
      "1인(팀) 1회 1면 최대 2시간, 당일 신청 불가",
      "실내 C코트는 강습 전용. 취소 수수료 10%(예약 당일 전액환불), 이용 당일 환불 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260910122719492911",
      "info": "https://seoul-tennis.com/guro-gu",
      "tel": "02-2611-9007"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260910122719492911",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260910123024197077",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S260910125532237003",
      "https://seoul-tennis.com/guro-gu"
    ],
    "transit_gongdeok": {
      "min": 43,
      "route": "5호선 공덕 → 영등포구청 환승 2호선 → 신도림 (2정거장) → 신정지선 환승 양천구청 (2정거장) + 도보 약 10분"
    }
  },
  {
    "id": "gocheok-park-tennis",
    "name": "고척근린공원 테니스장",
    "type": "public",
    "operator": "구로스포츠클럽 (구로구)",
    "address": "서울 구로구 고척동 산9-14",
    "lat": 37.50599,
    "lng": 126.85111,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "2호선 영등포구청 → 신도림 (2정거장) → 신정지선 환승 양천구청 (2정거장) + 도보 약 18분"
    },
    "tags": [
      "하드코트",
      "3면",
      "야외",
      "야간조명"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 조명 있음 (잔여 여부 확인 필요)"
      ],
      "weekend": [
        "ok",
        "주말 06~22시 운영"
      ]
    },
    "prices": [
      [
        "이용료",
        "확인 필요 (서울 생활체육포털엔 '일일 5,000원' 표기, 과거 블로그엔 2시간 1만원대)"
      ]
    ],
    "booking": [
      "구로스포츠클럽 온라인 예약시스템(회원가입 필요)",
      "2025년 6월부터 온라인 접수로 개편, 매월 25일 신규 접수 (최신 규정 확인 필요)"
    ],
    "links": {
      "reserve": "https://www.guro-gurosportsclub.or.kr/fmcs/3",
      "info": "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=834",
      "tel": "02-2619-3004"
    },
    "sources": [
      "https://seoul-tennis.com/guro-gu",
      "https://sports.seoul.go.kr/main/facilities/facilities_view.do?ft_idx=834",
      "https://sportsclub.sports.or.kr/club/seoul-guro/notice-view?bbsIntgSqn=12571&bbsStgSqn=539",
      "https://www.guro-gurosportsclub.or.kr/fmcs/3"
    ],
    "transit_gongdeok": {
      "min": 51,
      "route": "5호선 공덕 → 영등포구청 환승 2호선 → 신도림 (2정거장) → 신정지선 환승 양천구청 (2정거장) + 도보 약 18분"
    }
  },
  {
    "id": "seoul-energy-mokdong-tennis",
    "name": "서울에너지공사 목동 테니스장",
    "type": "public",
    "operator": "서울에너지공사",
    "address": "서울 양천구 목동서로 20 (예약 페이지 표기)",
    "lat": 37.53895,
    "lng": 126.88399,
    "approx": false,
    "transit": {
      "min": 25,
      "route": "5호선 영등포구청 → 양평 (1정거장) + 도보 약 18분 (또는 버스 '목동YMCA.서울에너지공사' 하차)"
    },
    "tags": [
      "2면",
      "야외",
      "무료",
      "주차가능",
      "주말·공휴일 전용"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "주말·공휴일 08~18시만 개방"
      ],
      "weekend": [
        "meh",
        "무료라 경쟁 치열, 10월분 예약마감"
      ]
    },
    "prices": [
      [
        "이용료",
        "무료 (주차 2대 무료)"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 선착순",
      "이용 전날 16시 접수 마감",
      "1팀 1~4명, 1회 최대 4시간, 1인 월 2회 (페이지 표기 일부 불일치)",
      "성인만 이용 가능"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S230428115408736358",
      "info": "https://seoul-tennis.com/yangcheon-gu",
      "tel": "02-2640-5173"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S230428115408736358",
      "https://seoul-tennis.com/yangcheon-gu"
    ],
    "transit_gongdeok": {
      "min": 35,
      "route": "5호선 공덕 → 양평 (7정거장) + 도보 약 18분 (또는 버스 '목동YMCA.서울에너지공사' 하차)"
    }
  },
  {
    "id": "anyangcheon-ogeumgyo-tennis",
    "name": "안양천 테니스장 (오금교 밑)",
    "type": "public",
    "operator": "양천구청 체육과",
    "address": "서울 양천구 안양천 오금교 하부 (신정동 일대)",
    "lat": 37.509,
    "lng": 126.8725,
    "approx": true,
    "transit": {
      "min": 28,
      "route": "2호선 영등포구청 → 신도림 (2정거장) → 신정지선 환승 도림천 (1정거장) + 도보 약 13분"
    },
    "tags": [
      "하드코트",
      "야외",
      "무료",
      "양천구민 전용",
      "주차가능"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "08~18시만 운영, 양천구민 전용"
      ],
      "weekend": [
        "no",
        "양천구민 전용 (주말 14~18시 대회 사용 가능)"
      ]
    },
    "prices": [
      [
        "이용료",
        "무료"
      ]
    ],
    "booking": [
      "양천구청 통합예약포털, 선착순, 양천구민만 신청 가능",
      "익월분은 매월 마지막 수요일 10:00 오픈",
      "2시간 단위(08~18시), 평일 주 2회·주말 주 1회 한도",
      "2~10명"
    ],
    "links": {
      "reserve": "https://www.yangcheon.go.kr/reservation/reservation/ex/reservationCal/View.do?riIdx=RI001407",
      "info": "https://seoul-tennis.com/yangcheon-gu",
      "tel": "02-2620-3419"
    },
    "sources": [
      "https://www.yangcheon.go.kr/reservation/reservation/ex/reservationCal/View.do?riIdx=RI001407",
      "https://seoul-tennis.com/yangcheon-gu"
    ],
    "transit_gongdeok": {
      "min": 41,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 신도림 (2정거장) 환승 신정지선 → 도림천 (1정거장) + 도보 약 13분"
    }
  },
  {
    "id": "doksan-tennis",
    "name": "독산테니스장",
    "type": "public",
    "operator": "금천구 문화체육과 (관리: 금천구테니스협회)",
    "address": "서울 금천구 독산로54길 288 (독산동)",
    "lat": 37.47445,
    "lng": 126.90698,
    "approx": false,
    "transit": {
      "min": 40,
      "route": "2호선 영등포구청 → 대림 (3정거장) → 7호선 가산디지털단지 (2정거장) → 1호선 독산 (1정거장) + 도보 약 10분"
    },
    "tags": [
      "인조잔디",
      "6면",
      "야외",
      "야간조명",
      "금천구민 우선"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 야간 이용 가능 (월 단위 접수 조기 마감 주의)"
      ],
      "weekend": [
        "meh",
        "주말 운영하나 구민 우선 접수 후 잔여분만"
      ]
    },
    "prices": [
      [
        "평일",
        "5,000원 / 1면 1시간"
      ],
      [
        "일·공휴일",
        "6,500원 / 1면 1시간"
      ],
      [
        "비고",
        "1시간 단위 최대 2시간, 06~22시; 토요일은 온라인 예약 없음"
      ]
    ],
    "booking": [
      "1·2번 코트: 서울시 공공서비스예약 / 3~6번 코트: 전화 예약(협회 010-3228-8649)",
      "익월분은 전월 말 7일 전 09:00 금천구민 우선 접수, 다음날 00:00부터 누구나",
      "선착순, 1일 1면, 노쇼 3회 시 익월 이용 제한",
      "환불: 10일 전 100%, 5~9일 전 70%, 1~4일 전 50%, 당일 불가"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S250608153823623749",
      "info": "https://seoul-tennis.com/geumcheon-gu",
      "tel": "02-2627-1428"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S250608153823623749",
      "https://seoul-tennis.com/geumcheon-gu"
    ],
    "transit_gongdeok": {
      "min": 42,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 독산 (5정거장) + 버스/도보 약 15분"
    }
  },
  {
    "id": "gasan2-retention-park-tennis",
    "name": "가산2빗물펌프장 유수지 체육공원 테니스장",
    "type": "public",
    "operator": "금천구청 치수과",
    "address": "서울 금천구 가산디지털2로 169-44 (가산2빗물펌프장)",
    "lat": 37.48263,
    "lng": 126.87539,
    "approx": false,
    "transit": {
      "min": 28,
      "route": "2호선 영등포구청 → 대림 (3정거장) → 7호선 가산디지털단지 (2정거장) + 도보 약 9분"
    },
    "tags": [
      "다목적구장(테니스·농구 겸용)",
      "야외",
      "야간조명",
      "무인 자율운영"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "평일 09~22시 운영, 조명 있음 (우천·수방기간 사용 제한)"
      ],
      "weekend": [
        "ok",
        "주말 09~22시 운영"
      ]
    },
    "prices": [
      [
        "이용료",
        "확인 필요 (seoul-tennis.com에는 '무료' 표기)"
      ]
    ],
    "booking": [
      "금천구 통합예약(온라인)",
      "이용일 10일 전 09:00 ~ 5일 전 09:00 접수",
      "1일 최대 2시간, 취소는 1일 전까지",
      "수방기간(5/15~10/15)·우천 시 이용 제한, 관리인 없음"
    ],
    "links": {
      "reserve": "https://www.geumcheon.go.kr/reserve/webErntView.do?key=115&searchErntNo=140305",
      "info": "https://seoul-tennis.com/geumcheon-gu",
      "tel": "02-2627-2037"
    },
    "sources": [
      "https://www.geumcheon.go.kr/reserve/webErntView.do?key=115&searchErntNo=140305",
      "https://www.geumcheon.go.kr/portal/contents.do?key=4019",
      "https://seoul-tennis.com/geumcheon-gu"
    ],
    "transit_gongdeok": {
      "min": 33,
      "route": "5호선 공덕 → 신길 (4정거장) 환승 1호선 → 가산디지털단지 (4정거장) + 도보 약 9분"
    }
  },
  {
    "id": "seonam-water-center-tennis",
    "name": "서남물재생센터 테니스장",
    "type": "public",
    "operator": "서울물재생시설공단",
    "address": "서울 강서구 양천로 201 (마곡동)",
    "lat": 37.57463,
    "lng": 126.82392,
    "approx": false,
    "transit": {
      "min": 45,
      "route": "5호선 영등포구청 → 마곡 (9정거장) + 버스 또는 도보 약 20분 (서남물재생센터 정류장)"
    },
    "tags": [
      "인조잔디",
      "12면",
      "야외",
      "야간조명(라이트 예약)",
      "주차가능"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~22시 운영, 라이트 포함 예약 가능 (거리는 다소 멂)"
      ],
      "weekend": [
        "ok",
        "주말 운영, 대회일(10/17·21·24·31 등) 일부 제한"
      ]
    },
    "prices": [
      [
        "기본",
        "5,000원 / 1면 1시간"
      ],
      [
        "라이트",
        "5,000원 추가"
      ],
      [
        "감면",
        "가양1동·방화1·3동 주민 60%, 65세 이상 등 50%"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약, 코트별 상시 접수",
      "이용일 10일 전 06:00 오픈 ~ 전날 21:00 마감, 선착순",
      "1일 1면 최대 2시간, 월 최대 8회",
      "1~4번 코트는 지역주민/65세 이상 전용, 5~12번 일반"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S210219091826906010",
      "info": "https://seoul-tennis.com/gangseo-gu",
      "tel": "02-3660-2254"
    },
    "sources": [
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S210219091826906010",
      "https://seoul-tennis.com/gangseo-gu"
    ],
    "transit_gongdeok": {
      "min": 30,
      "route": "공항철도 공덕 → 마곡나루 (3정거장) + 버스 또는 도보 약 15분 (서남물재생센터 정류장)"
    }
  },
  {
    "id": "ujangsan-tennis",
    "name": "우장산테니스장",
    "type": "public",
    "operator": "강서구청 공원녹지과",
    "address": "서울 강서구 우장산로10길 일대 (우장산근린공원)",
    "lat": 37.5514,
    "lng": 126.844,
    "approx": true,
    "transit": {
      "min": 30,
      "route": "5호선 영등포구청 → 우장산 (7정거장) + 도보 약 12분"
    },
    "tags": [
      "클레이",
      "4면",
      "야외",
      "유료주차"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "하절기 18시, 동절기 17시 종료"
      ],
      "weekend": [
        "ok",
        "주말 09~18시(동절기 17시) 3시간 단위 대관"
      ]
    },
    "prices": [
      [
        "하절기(3~10월) 3시간",
        "평일 11,000원 / 주말·공휴일 14,300원 — 1면"
      ],
      [
        "동절기(11~2월) 2시간 회차",
        "평일 8,800원 / 주말 11,440원 — 1면"
      ],
      [
        "동절기 3시간 회차",
        "평일 11,000원 / 주말 14,300원 — 1면"
      ],
      [
        "07~09시",
        "무료 개방"
      ]
    ],
    "booking": [
      "강서구 공공체육시설 홈페이지 온라인 예약",
      "전월 세 번째 금요일 13:00 오픈, 선착순",
      "ID당 월 4회, 같은 날 중복 불가, 12시간 내 카드결제",
      "1회 4인 이상 권장, 취소: 이용 전날까지 90% 환불"
    ],
    "links": {
      "reserve": "https://sports.gangseo.seoul.kr/fmcs/64",
      "info": "https://sports.gangseo.seoul.kr/fmcs/18",
      "tel": "02-2600-4193"
    },
    "sources": [
      "https://sports.gangseo.seoul.kr/fmcs/18",
      "https://sports.gangseo.seoul.kr/fmcs/64",
      "https://seoul-tennis.com/gangseo-gu"
    ],
    "transit_gongdeok": {
      "min": 41,
      "route": "5호선 공덕 → 우장산 (13정거장) + 도보 약 12분"
    }
  },
  {
    "id": "gangseo-banghwa-tennis",
    "name": "강서구립테니스장 (방화대교 남단)",
    "type": "public",
    "operator": "강서구 (체육관광과)",
    "address": "서울 강서구 방화동 36-14 (방화대교 남단, 공항고속도로 하부)",
    "lat": 37.585,
    "lng": 126.818,
    "approx": true,
    "transit": {
      "min": 48,
      "route": "5호선 영등포구청 → 방화 (13정거장) + 도보 약 15분"
    },
    "tags": [
      "하드코트",
      "6면",
      "야외",
      "야간조명",
      "주차가능",
      "강서구민 우선"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "17~19시·19~21시 회차 있음. 구민 우선예약 후 잔여분, 거리 멂"
      ],
      "weekend": [
        "meh",
        "주말 운영하나 구민 우선. 2026.9 시설개선 공사 공지 있음"
      ]
    },
    "prices": [
      [
        "07~09시(1·2번 현장)",
        "무료"
      ],
      [
        "09~21시 회차",
        "확인 필요 (2023년 서울예약엔 무료 표기)"
      ]
    ],
    "booking": [
      "3~6번 코트: 강서구 공공체육시설 홈페이지 온라인 / 1·2번: 당일 현장(장애인·65세 이상 우선)",
      "강서구민 우선예약 매월 셋째 화요일 09:00, 일반예약 목요일 09:00 ~ 월말",
      "2시간 회차, ID당 1일 1회·월 5회",
      "당일 취소 불가, 10분 지각 시 노쇼 처리"
    ],
    "links": {
      "reserve": "https://sports.gangseo.seoul.kr/fmcs/64",
      "info": "https://sports.gangseo.seoul.kr/fmcs/21",
      "tel": "02-2600-6579"
    },
    "sources": [
      "https://sports.gangseo.seoul.kr/fmcs/21",
      "https://sports.gangseo.seoul.kr/fmcs/64",
      "https://sports.gangseo.seoul.kr/fmcs/30",
      "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S230208201518310274"
    ],
    "transit_gongdeok": {
      "min": 42,
      "route": "공항철도 공덕 → 김포공항 (4정거장) 환승 5호선 → 방화 (2정거장) + 도보 약 15분"
    }
  },
  {
    "id": "hwanggeumnae-tennis",
    "name": "황금내테니스장",
    "type": "public",
    "operator": "강서구청 공원녹지과",
    "address": "서울 강서구 염창동 226-4 (황금내근린공원)",
    "lat": 37.56156,
    "lng": 126.865,
    "approx": false,
    "transit": {
      "min": 35,
      "route": "2호선 영등포구청 → 당산 (2정거장) → 9호선 등촌 (4정거장) + 도보 약 15분"
    },
    "tags": [
      "인조잔디",
      "1면",
      "야외",
      "무료",
      "주말 전용"
    ],
    "fit": {
      "weekdayEvening": [
        "no",
        "주말만 운영"
      ],
      "weekend": [
        "meh",
        "주말 09~18시(동절기 17시) 1시간 슬롯, 1면뿐이라 경쟁"
      ]
    },
    "prices": [
      [
        "이용료",
        "무료"
      ]
    ],
    "booking": [
      "강서구 공공체육시설 홈페이지 온라인 전용 (현장·전화 불가)",
      "강서구민: 전주 화요일 13:00 / 비거주자: 전주 수요일 13:00 잔여분",
      "ID당 1일 1시간, 월 4회",
      "최소 4인, 개인연습·레슨 불가"
    ],
    "links": {
      "reserve": "https://sports.gangseo.seoul.kr/fmcs/64",
      "info": "https://sports.gangseo.seoul.kr/fmcs/83",
      "tel": "02-2600-4186"
    },
    "sources": [
      "https://sports.gangseo.seoul.kr/fmcs/83",
      "https://sports.gangseo.seoul.kr/fmcs/64",
      "https://seoul-tennis.com/gangseo-gu"
    ],
    "transit_gongdeok": {
      "min": 34,
      "route": "5호선 공덕 → 여의도 (3정거장) 환승 9호선 급행 → 가양 (3정거장) + 도보 약 15분"
    }
  },
  {
    "id": "jy-tennis-daerim",
    "name": "JY테니스 (대림동 실내)",
    "type": "private",
    "operator": "JY테니스 (민간)",
    "address": "서울 영등포구 대림로 251 (대림동)",
    "lat": 37.503,
    "lng": 126.896,
    "approx": false,
    "transit": {
      "min": 15,
      "route": "2호선 영등포구청 → 대림 (3정거장) + 도보 약 5분 (위치 확인 필요)"
    },
    "tags": [
      "실내",
      "풀코트 1면",
      "볼머신",
      "1시간 단위",
      "주차 2시간 무료"
    ],
    "fit": {
      "weekdayEvening": [
        "ok",
        "06~23시 영업"
      ],
      "weekend": [
        "ok",
        "06~23시 영업"
      ]
    },
    "prices": [
      [
        "풀코트 볼머신 이용",
        "30,000원~ (1시간, 1팀 단독)"
      ],
      [
        "일반 코트 대관(경기용)",
        "확인 필요"
      ]
    ],
    "booking": [
      "네이버 예약 ('JY테니스' 검색)",
      "시간당 1팀 단독 사용",
      "볼머신 연습장 겸 레슨 운영 — 경기용 대관 가능 여부 전화 확인 권장"
    ],
    "links": {
      "reserve": "https://www.daangn.com/kr/local-profile/jy%ED%85%8C%EB%8B%88%EC%8A%A4-xab1cm37vuxg/",
      "info": "https://www.daangn.com/kr/local-profile/jy%ED%85%8C%EB%8B%88%EC%8A%A4-xab1cm37vuxg/",
      "tel": "0504-4643-9572"
    },
    "sources": [
      "https://www.daangn.com/kr/local-profile/jy%ED%85%8C%EB%8B%88%EC%8A%A4-xab1cm37vuxg/"
    ],
    "transit_gongdeok": {
      "min": 31,
      "route": "5호선 공덕 → 영등포구청 (6정거장) 환승 2호선 → 대림 (3정거장) + 도보 약 5분 (위치 확인 필요)"
    }
  },
  {
    "id": "tennis-lounge-gwangheungchang",
    "name": "테니스라운지 광흥창역점 (실내)",
    "type": "private",
    "operator": "테니스라운지",
    "address": "서울 마포구 신수로 56 지하 2층 (신수동)",
    "lat": 37.54657,
    "lng": 126.93443,
    "approx": false,
    "transit": {
      "min": 18,
      "route": "2호선 영등포구청 → 합정 (2정거장) 환승 6호선 → 광흥창 (2정거장) + 도보 3분"
    },
    "transit_gongdeok": {
      "min": 9,
      "route": "6호선 공덕 → 광흥창 (2정거장) + 도보 3분 (4번 출구)"
    },
    "tags": [
      "실내",
      "코트 2면 + 볼머신 2대",
      "냉난방",
      "샤워실·라커",
      "라켓 대여",
      "레슨장 겸 코트 대관"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "평일 06:00~22:00 영업(카카오맵). 랠리는 가능하지만 천장이 낮아 서브 연습이 어렵다는 후기"
      ],
      "weekend": [
        "meh",
        "토·일 07:00~19:00 영업(카카오맵). '주말 예약도 빡세지 않다'는 후기(2023). 정식 경기용 풀코트인지는 확인 필요"
      ]
    },
    "prices": [
      [
        "코트 대관",
        "33,000원 / 1시간 (VAT 10% 별도, 2023 블로그 기준)"
      ],
      [
        "라켓 대여",
        "10,000원 (2023 블로그) · 다른 후기는 무료 대여라고 함 — 확인 필요"
      ],
      [
        "라커 대여",
        "5,000원 (2023 블로그)"
      ]
    ],
    "booking": [
      "레슨 없이 코트 대관만 가능(블로그 후기)",
      "예약 방법·연락처 확인 필요"
    ],
    "links": {
      "reserve": "",
      "info": "https://place.map.kakao.com/1274022310",
      "tel": "확인 필요"
    }
  },
  {
    "id": "mangwon-yusuji-soft-tennis",
    "name": "망원유수지체육공원 소프트테니스장",
    "type": "public",
    "operator": "마포구체육회 (서울시 공공서비스예약)",
    "address": "서울 마포구 월드컵로25길 190 망원유수지 체육공원 트랙 좌측 (망원동 450-3)",
    "lat": 37.55717,
    "lng": 126.8976,
    "approx": true,
    "transit": {
      "min": 29,
      "route": "2호선 영등포구청 → 합정 (2정거장) 환승 6호선 → 마포구청 (2정거장) + 도보 약 14분"
    },
    "transit_gongdeok": {
      "min": 28,
      "route": "6호선 공덕 → 마포구청 (6정거장) + 도보 약 14분"
    },
    "tags": [
      "야외",
      "인조잔디",
      "단독 1면 (소프트테니스 코트)",
      "야간 이용(~22시)",
      "무인 자동개폐",
      "주차(마포구민체육센터, 유료)"
    ],
    "fit": {
      "weekdayEvening": [
        "meh",
        "야간 18:00~22:00 회차 있음. 단, 2026-10 현재 시설 보수로 예약 일시정지"
      ],
      "weekend": [
        "meh",
        "주말 주간·야간 회차 있으나 현재 예약 일시정지. 재개 시 인기 시간대는 오픈 즉시 마감된다는 후기"
      ]
    },
    "prices": [
      [
        "평일 주간 08~18시",
        "10,000원 / 2시간"
      ],
      [
        "평일 야간 18~22시",
        "13,000원 / 2시간"
      ],
      [
        "주말·공휴일 주간",
        "13,000원 / 2시간"
      ],
      [
        "주말·공휴일 야간",
        "16,900원 / 2시간"
      ]
    ],
    "booking": [
      "서울시 공공서비스예약 선착순 · 이용일 30일 전 12시 오픈 ~ 1일 전 21시까지",
      "1회 1면, 취소는 이용 1일 전까지 · 구민 우선 없음(후기)",
      "2026-10-16 현재 '예약 일시정지'(시설 보수로 운영 일시 중단 공지)"
    ],
    "links": {
      "reserve": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251114154032771814",
      "info": "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251013184642790062",
      "tel": "02-337-7319"
    }
  }
];
