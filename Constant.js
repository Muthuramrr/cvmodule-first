const EXAMINATION_BOARDS = [{
    code: '01',
    key:1,
    label:'TamilNadu Board of Higher Secondary Education (HSC)',
    state:'Tamil Nadu',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '02',
    key:2,
    label:'Central Board of Secondary Education (CBSE)',
    state:'All-India Board',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '03',
    key:3,
    label:'Council for Indian School Certificate Examinations',
    state:'All-India Board',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '04',
    key:4,
    label:'Andhra Pradesh Board of Intermediate Education',
    state:'Andhra Pradesh',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '05',
    key:5,
    label:'Bihar Intermediate Education Council',
    state:'Bihar',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '10',
    key:6,
    label:'Himachal Pradesh Board of School Education',
    state:'Himachal Pradesh',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '11',
    key:7,
    label:'The Jammu & Kashmir State Board of School Education(Annual 2018 Regular Kashmir (18AKTR))',
    state:'Jammu & Kashmir',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:99
},{
    code: '11',
    key:8,
    label:'The Jammu & Kashmir State Board of School Education(Annual 2018 Regular Kargil (18AGTR))',
    state:'Jammu & Kashmir',
    maxMaths:93,
    maxPhysics:98,
    maxChemistry:98
},{
    code: '11',
    key:9,
    label:'The Jammu & Kashmir State Board of School Education(Annual 2018 Regular Jammu (18AJTW) Winter Zone)',
    state:'Jammu & Kashmir',
    maxMaths:98,
    maxPhysics:99,
    maxChemistry:99
},{
    code: '11',
    key:10,
    label:'The Jammu & Kashmir State Board of School Education(Annual 2019 Regular Jammu (19AJTR) Summer Zone)',
    state:'Jammu & Kashmir',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '11',
    key:11,
    label:'The Jammu & Kashmir State Board of School Education(Annual 2018 Regular Leh (18ALTW) Winter Zone)',
    state:'Jammu & Kashmir',
    maxMaths:92,
    maxPhysics:97,
    maxChemistry:89
},{
    code: '15',
    key:12,
    label:'Madhya Pradesh Board of Secondary Education',
    state:'Madhya Pradesh',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '16',
    key:13,
    label:'Manipur Council of Higher Secondary Education',
    state:'Manipur',
    maxMaths:99,
    maxPhysics:99,
    maxChemistry:93
},{
    code: '17',
    key:14,
    label:'Meghalaya Board of School Education',
    state:'Meghalaya',
    maxMaths:97,
    maxPhysics:94,
    maxChemistry:95
},{
    code: '18',
    key:15,
    label:'Mizoram Board of School Education',
    state:'Mizoram',
    maxMaths:99,
    maxPhysics:97,
    maxChemistry:95
},{
    code: '19',
    key:16,
    label:'Nagaland Board of School Education',
    state:'Nagaland',
    maxMaths:98,
    maxPhysics:98,
    maxChemistry:97
},{
    code: '21',
    key:17,
    label:'Punjab School Education Board',
    state:'Punjab',
    maxMaths:100,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '24',
    key:18,
    label:'U.P. Board of High School & Intermediate Education',
    state:'Uttar Pradesh',
    maxMaths:99,
    maxPhysics:100,
    maxChemistry:100
},{
    code: '25',
    key:19,
    label:'International General Certificate of Secondary Education (IGCSE)',
    state:'Cambridge Assessment International Education',
    maxMaths:99,
    maxPhysics:97,
    maxChemistry:98
}];


const STATES =  [
    {
        key:'AN',
        label:'Andaman Nicobar'
    },
    {
        key:'AP',
        label:'Andhra Pradesh'
    },{
        key:'ARP',
        label:'Arunachal Pradesh'
    },{
        key:'AS',
        label:'Assam'
    },{
        key:'BI',
        label:'Bihar'
    },{
        key:'CH',
        label:'Chandigarh'
    },{
        key:'CHH',
        label:'Chhattisgarh'
    },{
        key:'DNH',
        label:"Dadra Nagar Haveli"
    },{
        key:'DA',
        label:'Daman & Diu'
    },{
        key:'DL',
        label:'Delhi'
    },{
        key:'GO',
        label:'Goa'
    },{
        key:'GU',
        label:'Gujarat'
    },{
        key:'HA',
        label:'Haryana'
    },{
        key:'HP',
        label:'Himachal Pradesh'
    },{
        key:'JK',
        label:'Jammu Kashmir'
    },{
        key:'JH',
        label:'Jharkhand'
    },{
        key:'KA',
        label:'Karnataka'
    },{
        key:'KE',
        label:'Kerala'
    },{
        key:'LD',
        label:'Ladakh'
    },{
        key:'LA',
        label:'Lakshadweep'
    },{
        key:'MP',
        label:'Madhya Pradesh'
    },{
        key:'MA',
        label:'Maharashtra'
    },{
        key:'MN',
        label:'Manipur'
    },{
        key:'ME',
        label:'Meghalaya'
    },{
        key:'MI',
        label: 'Mizoram'
    },{
        key:'NA',
        label:'Nagaland'
    },{
        key:'OD',
        label:'Odisha'
    },{
        key:'PY',
        label:'Puducherry'
    },{
        key:'PJ',
        label:'Punjab'
    },{
        key:'RJ',
        label:'Rajasthan'
    },
    {
        key:'GI',
        label:'Sikkim'
    },{
        key:'TN',
        label:'Tamilnadu'
    },{
        key:'TS',
        label:'Telangana'
    },{
        key:'TI',
        label:'Tripura'
    },{
        key:'UP',
        label:'Uttar Pradesh'
    },{
        key:'UT',
        label:'Uttarakhand'
    },{
        key:'WB',
        label:'West Bengal'
    }
];
const DISTRICTS = {
    AN:['Nicobar','North Middle Andaman','South Andaman'],
    AP:['Anantapur','Chittoor','East Godavari','Guntur','Kadapa','Krishna','Kurnool','Nellore','Prakasam','Srikakulam','Visakhapatnam','Vizianagaram','West Godavari'],
    ARP:['Anjaw','Central Siang','Changlang','Dibang Valley','East Kameng','East Siang','Kamle','Kra Daadi','Kurung Kumey','Lepa Rada','Lohit','Longding','Lower Dibang Valley','Lower Siang',
        'Lower Subansiri','Namsai','Pakke Kessang','Papum Pare','Shi Yomi','Tawang','Tirap','Upper Siang','Upper Subansiri','West Kameng','West Siang'],
    AS:['Baksa','Barpeta','Biswanath','Bongaigaon','Cachar','Charaideo','Chirang','Darrang','Dhemaji','Dhubri','Dibrugarh','Dima Hasao','Goalpara','Golaghat','Hailakandi','Hojai','Jorhat'
        ,'Kamrup','Kamrup Metropolitan','Karbi Anglong','Karimganj','Kokrajhar','Lakhimpur','Majuli','Morigaon','Nagaon','Nalbari','Sivasagar','Sonitpur','South Salmara-Mankachar','Tinsukia'
        ,'Udalguri','West Karbi Anglong'],
    BI:['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj',
        'Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul'
        ,'Vaishali','West Champaran'],
    CH:['Chandigarh'],
    CHH:["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon",
        "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    DNH:['Dadra Nagar Haveli'],
    DA:['Daman','Diu'],
    DL:["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    GO:['North Goa','South Goa'],
    GU:["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath",
        "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar",
        "Tapi", "Vadodara", "Valsad"],
    HA:["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat",
        "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    HP:["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    JK:["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban",
        "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    JH:["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti",
        "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    KA:["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru",
        "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal",
        "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    KE:["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
        "Thiruvananthapuram", "Thrissur", "Wayanad"],
    LA:['Lakshadweep'],
    LD:['Kargil','Leh'],
    MP:["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",
        "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad",
        "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur",
        "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol",
        "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    MA:["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur",
        "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
        "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur",
        "Thane", "Wardha", "Washim", "Yavatmal"],
    MN:["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal",
        "Thoubal", "Ukhrul"],
    ME:["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills",
        "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    MI:["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    NA:["Mon", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    OD:["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi",
        "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],
    PY:["Karaikal", "Mahe", "Puducherry", "Yanam"],
    PJ:["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar",
        "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    RJ:["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer",
        "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    GI:["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    TN:["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai",
        "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi ", "Thanjavur", "The Nilgiris","Theni", 'Thirupattur',"Thoothukudi", "Tiruchirappalli",
        "Tirunelveli",  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    TS:["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar",
        "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet",
        "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    TI:["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    UP:["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti",
        "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur",
        "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar",
        "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur",
        "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    UT:["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"],
    WB:["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia",
        "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

const DIST_LIST= [{key:1,label:"Ariyalur"}, {key:2,label:"Chengalpattu"},{key:3,label:"Chennai"}, {key:4,label:"Coimbatore"}, {key:5,label:"Cuddalore"}, {key:6,label:"Dharmapuri"}, {key:7,label:"Dindigul"}, {key:8,label:"Erode"}, {key:9,label:"Kallakurichi"},
    {key:10,label:"Kanchipuram"}, {key:11,label:"Kanyakumari"}, {key:12,label:"Karur"}, {key:13,label:"Krishnagiri"}, {key:14,label:"Madurai"}, {key:15,label:"Nagapattinam"},
    {key:16,label:"Namakkal"}, {key:17,label:"Perambalur"}, {key:18,label:"Pudukkottai"}, {key:19,label:"Ramanathapuram"}, {key:20,label:"Ranipet"}, {key:21,label:"Salem"}, {key:22,label:"Sivaganga"}, {key:23,label:"Tenkasi"},
    {key:24,label:"Thanjavur"}, {key:25,label:"The Nilgiris"},{key:26,label:"Theni"}, {key:27,label:'Thirupattur'},{key:28,label:"Thoothukudi"}, {key:29,label:"Tiruchirappalli"},
    {key:30,label:"Tirunelveli"},  {key:31,label:"Tiruppur"}, {key:32,label:"Tiruvallur"}, {key:33,label:"Tiruvannamalai"}, {key:34,label:"Tiruvarur"}, {key:35,label:"Vellore"}, {key:36,label:"Viluppuram"}, {key:37,label:"Virudhunagar"},{key:38,label:"Others"}];

const MOTHER_TONGUE = [{ key : 1, label: "Tamil"},
{ key : 2, label: "Telugu"},
{ key : 3, label: "Malayalam"},
{ key : 4, label: "Kannada"},
{ key : 5, label: "Others"}];

const CIVIC_STATUS = [{ key : 1, label: "Corporation"},
    { key : 2, label: "Municipality"},
    { key : 3, label: "Town Panchayat"},
    { key : 4, label: "Panchayat Union"},
    { key : 5, label: "Village Panchayat"}];

const RELIGION = [{ key : 1, label: "Hindu"},
    { key : 2, label: "Christian"},
    { key : 3, label: "Muslims"},
    { key : 4, label: "Sikhism"},
    { key : 5, label: "Jainism"},
    { key : 6, label: "Buddhism"},
    { key : 7, label: "Others"}];

const NATIONALITY = [{key:'IN',label:'Indian'},{key:'SLR',label:'Srilankan Tamil Refugee'},{key:'OTH',label:'Others'}];
const NATIVITY = [{key:'TN',label:'Tamilnadu'},{key:'OTH',label: 'Others'}];
const COMMUNITY=[{key:'OC',label:'OC'},{key:'BCM',label:'BCM'},{key:'BC',label:'BC'},{key:'MBC',label:'MBC'},{key:'SC',label:'SC'},{key:'SCA',label:'SCA'},{key:'ST',label:'ST'}];
const CASTE= {
    "ST":[{ key:1   , label:"Adiyan"},
        { key:2   , label:"Aranadan"},
        { key:3   , label:"Eravallan"},
        { key:4   , label:"Irular"},
        { key:5   , label:"Kadar"},
        { key:6   , label:"Kammara"},
        { key:7   , label:"Kanikaran, Kanikkar"},
        { key:8   , label:"Kaniyan, Kanyan"},
        { key:9   , label:"Kattunayakan"},
        { key:10  , label:"Kochu Velan"},
        { key:11  , label:"Konda Kapus"},
        { key:12  , label:"Kondareddis"},
        { key:13  , label:"Koraga"},
        { key:14  , label:"Kota"},
        { key:15  , label:"Kudiya, Melakudi"},
        { key:16  , label:"Kurichchan"},
        { key:17  , label:"Kurumbas"},
        { key:18  , label:"Kurumans"},
        { key:19  , label:"Maha Malasar"},
        { key:20  , label:"Malai Arayan"},
        { key:21  , label:"Malai Pandaram"},
        { key:22  , label:"Malai Vedan"},
        { key:23  , label:"Malakkuravan"},
        { key:24  , label:"Malasar"},
        { key:25  , label:"Malayali"},
        { key:26  , label:"Malayakandi"},
        { key:27  , label:"Mannan"},
        { key:28  , label:"Mudugar, Muduvan"},
        { key:29  , label:"Muthuvan"},
        { key:30  , label:"Pallayan"},
        { key:31  , label:"Palliyan"},
        { key:32  , label:"Palliyar"},
        { key:33  , label:"Paniyan"},
        { key:34  , label:"Sholaga"},
        { key:35  , label:"Toda"},
        { key:36  , label:"Uraly"}],
    "SC":[{ key:37  , label:"Adi Dravida"},
        { key:38  , label:"Adi Karnataka"},
        { key:39  , label:"Ajila"},
        { key:40  , label:"Ayyanavar"},
        { key:41  , label:"Baira"},
        { key:42  , label:"Bakuda"},
        { key:43  , label:"Bandi"},
        { key:44  , label:"Bellara"},
        { key:45  , label:"Bharatar"},
        { key:46  , label:"Chalavadi"},
        { key:47  , label:"Chamar, Muchi"},
        { key:48  , label:"Chandala"},
        { key:49  , label:"Cheruman"},
        { key:50  , label:"Devendrakulathan"},
        { key:51  , label:"Dom, Dombara, Paidi, Pane"},
        { key:52  , label:"Domban"},
        { key:53  , label:"Godagali"},
        { key:54  , label:"Godda"},
        { key:55  , label:"Gosangi"},
        { key:56  , label:"Holeya"},
        { key:57  , label:"Jaggali"},
        { key:58  , label:"Jambuvulu"},
        { key:59  , label:"Kadaiyan"},
        { key:60  , label:"Kakkalan"},
        { key:61  , label:"Kalladi"},
        { key:62  , label:"Kanakkan, Padanna"},
        { key:63  , label:"Karimpalan"},
        { key:64  , label:"Kavara"},
        { key:65  , label:"Koliyan"},
        { key:66  , label:"Koosa"},
        { key:67  , label:"Kootan, Koodan"},
        { key:68  , label:"Kudumban"},
        { key:69  , label:"Kuravan, Sidhanar"},
        { key:70  , label:"Maila"},
        { key:71  , label:"Mala"},
        { key:72  , label:"Mannan"},
        { key:73  , label:"Mavilan"},
        { key:74  , label:"Moger"},
        { key:75  , label:"Mundala"},
        { key:76  , label:"Nalakeyava"},
        { key:77  , label:"Nayadi"},
        { key:78  , label:"Padannan"},
        { key:79  , label:"Pallan"},
        { key:80  , label:"Pulluvan"},
        { key:81  , label:"Pambada"},
        { key:82  , label:"Panan"},
        { key:83  , label:"Panchama"},
        { key:84  , label:"Pannadi"},
        { key:85  , label:"Panniandi"},
        { key:86  , label:"Paraiyan, Parayan, Sambavar"},
        { key:87  , label:"Paravan"},
        { key:88  , label:"Pathiyan"},
        { key:89  , label:"Pulayan, Cheramar"},
        { key:90  , label:"Puthirai Vannan"},
        { key:91  , label:"Raneyar"},
        { key:92  , label:"Samagara"},
        { key:93  , label:"Samban"},
        { key:94  , label:"Sapari"},
        { key:95  , label:"Semman"},
        { key:96  , label:"Thandan"},
        { key:97  , label:"Tiruvalluvar"},
        { key:98  , label:"Vallon"},
        { key:99  , label:"Valluvan"},
        { key:100 , label:" Vannan"},
        { key:101 , label:" Vathiriyan"},
        { key:102 , label:" Velan"},
        { key:103 , label:" Vetan"},
        { key:104 , label:" Vettiyan"},
        { key:105 , label:" Vettuvan"}
    ],
    "SCA" :[{ key:108 , label:"Adi Andhra"},
        { key:109 , label:"Arunthathiyar"},
        { key:110 , label:"Chakkiliyan"},
        { key:111 , label:"Madari"},
        { key:112 , label:"Madiga"},
        { key:113 , label:"Pagadai"},
        { key:114 , label:"Thoti"},
    ],
    "MBC":[{ key:115 , label:"Ambalakarar"},
        { key:116 , label:"Andipandaram"},
        { key:'117A', label:"Arayar"},
        { key:118 , label:"Bestha, Siviar"},
        { key:119 , label:"Bhatraju (Other than Kshatriya Raju)"},
        { key:120 , label:"Boyar, Oddar"},
        { key:121 , label:"Dasari"},
        { key:122 , label:"Dommara"},
        { key:123 , label:"Eravallar"},
        { key:124 , label:"Isaivellalar"},
        { key:125 , label:"Jambuvanodai"},
        { key:126 , label:"Jangam"},
        { key:127 , label:"Jogi"},
        { key:128 , label:"Kongu Chettiar"},
        { key:129 , label:"Koracha"},
        { key:130 , label:"Kulala"},
        { key:131 , label:"Kunnuvar Mannadi"},
        { key:132 , label:"Kurumba, Kurumba Gounder"},
        { key:133 , label:"Kuruhini Chetty"},
        { key:'134A', label:"Latin Catholic Christian Vannar"},
        { key:135 , label:"Maruthuvar, Navithar, Mangala,Velakattalavar, Velakatalanair and Pronopakari"},
        { key:136 , label:"Mond Golla"},
        { key:137 , label:"Moundadan Chetty"},
        { key:138 , label:"Mahendra, Medara"},
        { key:'138A', label:"Mutlakampatti"},
        { key:139 , label:"Narikoravar (Kurivikars)"},
        { key:140 , label:"Nokkar"},
        { key:'142A', label:"Panisaivan / Panisivan"},
        { key:143 , label:"Vanniakula Kshatriya (including Vanniyar, Vanniya,Vannia Gounder, Gounder or Kander, Padayachi, Palli & Agnikula Kshatriya)"},
        { key:144 , label:"Paravar"},
        { key:'145A', label:"Paravar converts to Christianity"},
        { key:146 , label:"Meenavar (Parvatharajakulam, Pattanavar, Sembadavar)"},
        { key:147 , label:"Mukkuvar or Mukayar"},
        { key:148 , label:"Punnan Vettuva Gounder"},
        { key:149 , label:"Pannayar"},
        { key:150 , label:"Sathatha Srivaishnava (including Sathani, Chattadi and Chattada Srivaishnava)"},
        { key:151 , label:"Sozhia Chetty"},
        { key:152 , label:"Telugupatty Chetty"},
        { key:153 , label:"Thottia Naicker (including Rajakambalam, Gollavar, Sillavar, Thockalavar, Thozhuva Naicker and Erragollar)"},
        { key:154 , label:"Thondaman"},
        { key:'155A', label:"Thoraiyar"},
        { key:'156B', label:"Thoraiyar"},
        { key:'156C', label:"Transgender or Eunuch (Thirunangai or Aravani)"},
        { key:157 , label:"Valaiyar (including Chettinad Valayars)"},
        { key:158 , label:"Vannar (Salaivai Thozhilalar) (including Agas"},
        { key:159 , label:"Vettaikarar"},
        { key:160 , label:"Vettuva Gounder"},
        { key:161 , label:"Yogeeswarar"},
        { key:162 , label:"Attur   Kilnad   Koravars  "},
        { key:163 , label:"Attur Melnad Koravars"},
        { key:164 , label:"Appanad Kondayam Kottai Maravar"},
        { key:165 , label:"Ambalakarar"},
        { key:166 , label:"Ambalakkarar"},
        { key:167 , label:"Boyas"},
        { key:168 , label:"Battu Turkas"},
        { key:169 , label:"C.K. Koravars"},
        { key:170 , label:"Chakkala"},
        { key:171 , label:"Changyampudi Koravars"},
        { key:172 , label:"Chettinad Valayars"},
        { key:173 , label:"Dombs"},
        { key:174 , label:"Dobba Koravars"},
        { key:175 , label:"Dommars"},
        { key:176 , label:"Donga Boya"},
        { key:177 , label:"Donga Ur. Korachas"},
        { key:178 , label:"Devagudi Talayaris"},
        { key:179 , label:"Dobbai Korachas"},
        { key:180 , label:"Dabi Koravars"},
        { key:181 , label:"Donga Dasaris"},
        { key:182 , label:"Gorrela Dodda Boya"},
        { key:183 , label:"Gudu Dasaris"},
        { key:184 , label:"Gandarvakottai Koravars"},
        { key:185 , label:"Gandarvakottai Kallars"},
        { key:186 , label:"Inji Koravars"},
        { key:187 , label:"Jogis"},
        { key:188 , label:"Jambavanodai"},
        { key:189 , label:"Kaladis"},
        { key:190 , label:"Kal Oddars"},
        { key:191 , label:"Koravars"},
        { key:192 , label:"Kalinji Dabikoravars"},
        { key:193 , label:"Kootappal Kallars"},
        { key:194 , label:"Kala Koravars"},
        { key:195 , label:"Kalavathila Boyas"},
        { key:196 , label:"Kepmaris"},
        { key:197 , label:"Maravars"},
        { key:198 , label:"Monda Koravars"},
        { key:199 , label:"Monda Golla"},
        { key:200 , label:"Mutlakampatti"},
        { key:201 , label:"Nokkars"},
        { key:202 , label:"Nellorepet Oddars"},
        { key:203 , label:"Oddars"},
        { key:204 , label:"Pedda Boyas"},
        { key:205 , label:"Ponnai Koravars"},
        { key:206 , label:"Piramalai"},
        { key:207 , label:"Peria"},
        { key:208 , label:"Padayachi"},
        { key:209 , label:"Punnan Vettuva Gounder"},
        { key:210 , label:"Servai"},
        { key:211 , label:"Salem Melnad Koravars"},
        { key:212 , label:"Salem Uppu Koravars"},
        { key:213 , label:"Sakkaraithamadai Koravars"},
        { key:214 , label:"Saranga Palli Koravars"},
        { key:215 , label:"Sooramari Oddars"},
        { key:216 , label:"Sembanad Maravars"},
        { key:217 , label:"Thalli Koravars"},
        { key:218 , label:"Telungapatti Chetis"},
        { key:219 , label:"Thottia Naickers"},
        { key:220 , label:"Thogamalai Koravars or Kepmaris"},
        { key:221 , label:"Uppukoravars or Settipalli Koravars"},
        { key:222 , label:"Urali Gounders"},
        { key:223 , label:"Wayalpad or Nawalpeta Korachas"},
        { key:224 , label:"Vaduvarpatti Koravars"},
        { key:225 , label:"Valayars"},
        { key:226 , label:"Vettaikarar"},
        { key:227 , label:"Vetta koravars"},
        { key:228 , label:"Varaganeri"},
        { key:229 , label:"Vettuva"},
    ],
    "BC":[{ key:230 , label:"Agamudayar including Thozhu or Thuluva Vellala"},
        { key:231 , label:"Agaram Vellan Chettiar"},
        { key:232 , label:"Alwar, Azhavar and Alavar"},
        { key:233 , label:"Servai"},
        { key:234 , label:"Nulayar"},
        { key:235 , label:"Archakarai Vellala"},
        { key:236 , label:"Aryavathi"},
        { key:237 , label:"Ayira Vaisyar"},
        { key:238 , label:"Badagar"},
        { key:239 , label:"Billava"},
        { key:240 , label:"Bondil"},
        { key:241 , label:"Boyas, Pedda Boyar , Oddars , Kaloddars, Nellorepet Oddars ,Sooramari Oddars"},
        { key:242 , label:"Chakkala"},
        { key:243 , label:"Chavalakarar"},
        { key:244 , label:"Chettu or Chetty (including Kottar Chetty, Elur Chetty,Pathira Chetty, Valayal Chetty, Pudukadai Chetty)"},
        { key:245 , label:"Chowdry"},
        { key:'246A', label:"Converts to Christianity from Scheduled Castes irrespective of the generation of conversion"},
        { key:'247B', label:"C.S.I. formerly S.I.U.C."},
        { key:248 , label:"Donga Dasaris"},
        { key:249 , label:"Devangar, Sedar"},
        { key:250 , label:"Dombs"},
        { key:251 , label:"Enadi"},
        { key:252 , label:"Ezhavathy"},
        { key:253 , label:"Ezhuthachar"},
        { key:254 , label:"Ezhuva"},
        { key:255 , label:"Gangavar"},
        { key:256 , label:"Gavara, Gavarai & Vadugar (Vaduvar)"},
        { key:257 , label:"Gounder"},
        { key:258 , label:"Gowda (including Gammala, Kalali and Anuppa Gounder)"},
        { key:259 , label:"Hegde"},
        { key:260 , label:"Idiga"},
        { key:261 , label:"Illathu Pillaimar, Illuvar, Ezhuvar & Illathar"},
        { key:262 , label:"Jhetty"},
        { key:263 , label:"Jogis"},
        { key:264 , label:"Kabbera"},
        { key:265 , label:"Kaikolar, Sengunthar"},
        { key:266 , label:"Kaladi"},
        { key:267 , label:"Kalari Kurup including Kalari Panicker"},
        { key:268 , label:"Kalingi"},
        { key:269 , label:"Kallar, Easanattu  Kallar, Gandharva Kottai Kallars , KootappalKallars, Piramalai Kallars , Periyasooriyur Kallars"},
        { key:270 , label:"Kallar Kula Thondaman"},
        { key:271 , label:"Kalveli Gounder"},
        { key:272 , label:"Kambar"},
        { key:273 , label:"Kammalar or Viswakarma, Viswakarmala (including Thattar,Porkollar, Kannar, Karumar, Kollar, Thacher, Kal Thacher, Kamsala  and Viswabrahmin)"},
        { key:274 , label:"Kani, Kanisu, Kaniyar Panicker"},
        { key:275 , label:"Kaniyala Vellalar"},
        { key:276 , label:"Kannada Saineegar, Kannadiyar  and Dasapalanjika"},
        { key:277 , label:"Kannadiya Naidu"},
        { key:278 , label:"Karpoora Chettiar"},
        { key:279 , label:"Karuneegar (Seer Karuneegar, Sri Karuneegar,Sarattu Karuneegar, Kaikatti Karuneegar, Mathuvazhi Kanakkar,Sozhi Kanakkar & Sunnambu Karuneegar)"},
        { key:280 , label:"Kasukkara Chettiar"},
        { key:281 , label:"Katesar,  Pattamkatti"},
        { key:282 , label:"Kavuthiyar"},
        { key:283 , label:"Kerala Mudali"},
        { key:284 , label:"Kharvi"},
        { key:285 , label:"Khatri"},
        { key:286 , label:"Kongu Vaishnava"},
        { key:287 , label:"Kongu Vellalars"},
        { key:288 , label:"Koppala Velama"},
        { key:289 , label:"Koteyar"},
        { key:290 , label:"Krishnanvaka"},
        { key:291 , label:"Kudikara Vellalar"},
        { key:292 , label:"Kudumbi"},
        { key:293 , label:"Kuga Vellalar"},
        { key:294 , label:"Kunchidigar"},
        { key:'295A', label:"Latin Catholics"},
        { key:'296B', label:"Latin Catholics"},
        { key:297 , label:"Lambadi"},
        { key:298 , label:"Lingayat (Jangama)"},
        { key:299 , label:"Mahratta (NonBrahmin) (including Namadev Mahratta)"},
        { key:300 , label:"Malayar"},
        { key:301 , label:"Male"},
        { key:302 , label:"Maniagar"},
        { key:303 , label:"Maravars ,Karumaravars. Appanad Kondayamkottai Maravar and Sembanad Maravars"},
        { key:304 , label:"Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar"},
        { key:305 , label:"Mooppan"},
        { key:306 , label:"Muthuraja, Muthuracha, Muttiriyar, Mutharaiyar"},
        { key:307 , label:"Nadar, Shanar & Gramani including Christian Nadar,Christian Shanar and Christian Gramani"},
        { key:308 , label:"Nagaram"},
        { key:309 , label:"Naikkar"},
        { key:310 , label:"Nangudi Vellalar"},
        { key:311 , label:"Nanjil Mudali"},
        { key:312 , label:"Odar"},
        { key:313 , label:"Odiya"},
        { key:314 , label:"Oottruvalanattu Vellalar"},
        { key:315 , label:"O.P.S. Vellalar"},
        { key:316 , label:"Ovachar"},
        { key:317 , label:"Paiyur Kotta Vellalar"},
        { key:318 , label:"Pamulu"},
        { key:319 , label:"Panar"},
        { key:'320A', label:"Pandiya Vellalar"},
        { key:321 , label:"Omitted"},
        { key:322 , label:"Kathikarar"},
        { key:323 , label:"Pannirandam Chettiar or Uthama Chettiar"},
        { key:324 , label:"Parkavakulam (including Surithimar Nathamar, Malayamar, Moopanar & Nainar)"},
        { key:325 , label:"Perike (including Perike Balija)"},
        { key:326 , label:"Perumkollar"},
        { key:327 , label:"Podikara Vellalar"},
        { key:328 , label:"Pooluva Gounder"},
        { key:329 , label:"Poraya"},
        { key:330 , label:"Pulavar"},
        { key:331 , label:"Pulluvar or Pooluvar"},
        { key:332 , label:"Pusala"},
        { key:333 , label:"Reddy (Ganjam)"},
        { key:334 , label:"Sadhu Chetty (including Telugu Chetty, Twenty four manai Telugu Chetty)"},
        { key:335 , label:"Sakkaravar or Kavathi"},
        { key:336 , label:"Salivagana"},
        { key:337 , label:"Saliyar, Padmasaliyar, Pattusaliyar, Pattariyar and Adhaviyar"},
        { key:338 , label:"Savalakkarar"},
        { key:339 , label:"Senaithalaivar, Senaikudiyar and Illaivaniar"},
        { key:'340A', label:"Serakula Vellalar"},
        { key:341 , label:"Sourashtra (Patnulkarar)"},
        { key:342 , label:"Sozhia Vellalar (including Sozha Vellalar. Vetrilaikarar, Kodikalkarar and Keeraikarar)"},
        { key:343 , label:"Srisayar"},
        { key:344 , label:"Sundaram Chetty"},
        { key:345 , label:"Thogatta Veerakshatriya"},
        { key:346 , label:"Tholkollar"},
        { key:347 , label:"Tholuva Naicker and Vetalakara Naicker"},
        { key:348 , label:"Omitted"},
        { key:349 , label:"Thoriyar"},
        { key:350 , label:"Ukkirakula Kshatriya Naicker"},
        { key:351 , label:"Uppara, Uppillia and Sagara"},
        { key:352 , label:"Urali Gounder"},
        { key:353 , label:"Urikkara Nayakkar"},
        { key:'354A', label:"Virakodi Vellala"},
        { key:355 , label:"Vallambar"},
        { key:'356A', label:"Vallanattu Chettiar"},
        { key:357 , label:"Valmiki"},
        { key:358 , label:"Vaniyar, Vania Chettiar (including Gandla, Ganika, Telikula and Chekkalar)"},
        { key:359 , label:"Veduvar and Vedar"},
        { key:360 , label:"Veerasaiva"},
        { key:361 , label:"Velar"},
        { key:362 , label:"Vellan Chettiar"},
        { key:363 , label:"Veluthodathu Nair"},
        { key:364 , label:"Vokkaligar (including Vakkaligar, Okkaligar, Kappiliyar,Kappiliya, Okkaliga Gowda, Okkaliya-Gowder, Okkaliya Gowda)"},
        { key:365 , label:"Wynad Chetty"},
        { key:366 , label:"Yadhava (including Idaiyar, Telugu Speaking Idaiyar known as Vaduga Ayar or Vaduga Idaiyar or Golla and Asthanthra Golla)"},
        { key:367 , label:"Yavana"},
        { key:368 , label:"Yerukula"},
        { key:'369A', label:"Converts to Christianity from any Hindu Backward Classes or Most Backward Classes Community or Denotified Communities"},
        { key:370 , label:"Orphans and destitutes children"},
    ],
    "BCM":[{ key:371 , label:"Ansar"},
        { key:372 , label:"Dekkani Muslims"},
        { key:373 , label:"Dudekula"},
        { key:374 , label:"Labbais including Rowthar and Marakayar"},
        { key:375 , label:"Mapilla"},
        { key:376 , label:"Sheik"},
        { key:377 , label:"Syed"},
    ],
    "OC":[{ key:500 , label:"Others"}]
};
const GENDER = [
    {
        key: 'M',
        label : 'Male'
    },
    {
        key:'F',
        label:'Female'
    },
   {
        key:'T',
        label:'Transgender'
    }
];

const STEPS = {
    REGISTER:'register',
    PERSONAL_INFO:'personalInfo',
    SPL_RESERVE:'splReserve',
    SCHOLARSHIP:'scholarship',
    SCHOOL_DETAILS:'schooldDetails',
    ACADEMIC:'academic',
    PAYMENT:'payment'
};

const PAYMENT_STATUS = {
    SUCCESS: 1,
    DEFAULT: 0,
    FAILED: 2,
    PENDING: 3,
    INITIATED: 4
};

const DIFF_ABLED_TYPES = [{key : 1, label: "Visually Impaired"},
    {key : 2, label: "Hearing Impaired"},
    {key : 3, label: "Locomotor disability"},
    {key : 4, label: "Autism / Intellectual disability / Specific learning disability / Mental illness"},
    {key : 5, label: "Multiple Disability"}
];

const TFC_CENTER = [{key : 1, label: "CENTRAL POLYTECHNIC COLLEGE, THARAMANI, CHENNAI"},
    {key : 2, label: "THIRU KOLANJIAPPAR GOVERNMENT ARTS COLLEGE, VIRUDHACHALAM, CUDDALORE"},
    {key : 3, label: "FACULTY OF ENGINEERING AND TECHNOLOGY ANNAMALAI UNIVERSITY, CHIDAMBARAM, CUDDALORE"},
    {key : 4, label: "PACHAIYAPPAS GOVERNMENT WOMENS COLLEGE, CHINNA KANCHIPURAM, KANCHIPURAM"},
    {key : 5, label: "IRT POLYTECHNIC COLLEGE, TAMBARAM(TK), KANCHIPURAM"},
    {key : 6, label: "MURUGAPPA POLYTECHNIC COLLEGE, AVADI, THIRUVALLUR"},
    {key : 7, label: "GOVT.POLYTECHNIC COLLEGE,CHEYYAR, THIRUVANNAMALAI"},
    {key : 8, label: "THANTHAI PERIYAR GOVERNMENT INSTITUTE OF TECHNOLOGY, BAGAYAM, VELLORE"},
    {key : 9, label: "GOVERNMENT POLYTECHNIC COLLEGE, SANKARAPURAM, KATTUVANNANJUR, VILLUPURAM"},
    {key : 10, label: "GOVERNMENT POLYTECHNIC COLLEGE, TIRUKOILUR(TK), VILLUPURAM"},
    {key : 11, label: "GOVERNMENT POLYTECHNIC COLLEGE, PEELAMEDU, COIMBATORE"},
    {key : 12, label: "GOVT.POLYTECHNIC COLLEGE FOR WOMEN, SIDDHAPUDUR, COIMBATORE"},
    {key : 13, label: "COIMBATORE INSTITUTE OF TECHNOLOGY, COIMBATORE"},
    {key : 14, label: "GOVERNMENT COLLEGE OF ENGINEERING, CHETTIKARAI, DHARMAPURI"},
    {key : 15, label: "SAKTHI POLYTECHNIC COLLEGE, SAKTHI NAGAR, ERODE"},
    {key : 16, label: "GOVERNMENT POLYTECHNIC COLLEGE, PERUNDURAI, ERODE"},
    {key : 17, label: "GOVT.COLLEGE OF ENGINEERING, BARGUR, KRISHNAGIRI"},
    {key : 18, label: "GOVERNMENT ARTS COLLEGE FOR WOMEN, NAMAKKAL"},
    {key : 19, label: "GOVERNMENT ARTS COLLEGE, NILGIRIS"},
    {key : 20, label: "GOVT.COLLEGE OF ENGINEERING, SALEM"},
    {key : 21, label: "CHIKKANNA GOVERNMENT ARTS COLLEGE, TIRUPPUR, TIRUPPUR"},
    {key : 22, label: "GOVERNMENT ARTS COLLEGE, THANTHONIMALAI, KARUR"},
    {key : 23, label: "TAMIL NADU POLYTECHNIC COLLEGE, MADURAI"},
    {key : 24, label: "THIAGARAJAR COLLEGE OF ENGINEERING, THIRUPARANKUNDRAM, MADURAI"},
    {key : 25, label: "GOVERNMENT ARTS COLLEGE, PARAMAKUDI, RAMANATHAPURAM"},
    {key : 26, label: "GOVERNMENT COLLEGE OF ENGINEERING, BODINAYAKANOOR, THENI"},
    {key : 27, label: "GTN ARTS COLLEGE (AUTONOMOUS) KARUR ROAD, DINDIGUL"},
    {key : 28, label: "GOVT.POLYTECHNIC COLLEGE, KILAPALUR VILLAGE, ARIYALUR"},
    {key : 29, label: "VALIVALAM DESIKAR POLYTECHNIC COLLEGE, PALPANNAICHERRY, COLLECTROATE, NAGAPATTINAM"},
    {key : 30, label: "GOVERNMENT POLYTECHNIC COLLEGE, KEELAKNAVAI, PERAMBALUR"},
    {key : 31, label: "GOVERNMENT POLYTECHNIC COLLEGE, ARANTHANGI, PUDUKOTTAI"},
    {key : 32, label: "GOVERNMENT POLYTECHNIC COLLEGE, PAPANASAM, THANJAVUR"},
    {key : 33, label: "GOVT.COLLEGE OF ENGINEERING, SENGIPATTI, THANJAVUR"},
    {key : 34, label: "GOVT.POLYTECHNIC COLLEGE, THUVAKUDIMALAI, TIRUCHIRAPALLI"},
    {key : 35, label: "GOVERNMENT COLLEGE OF ENGINEERING, SRIRANGAM, TIRUCHIRAPALLI"},
    {key : 36, label: "GOVT.POLYTECHNIC COLLEGE, VALANGAIMAN, THIRUVARUR"},
    {key : 37, label: "A.C.COLLEGE OF ENGINEERING AND TECHNOLOGY, KARAIKUDI, SIVAGANGAI"},
    {key : 38, label: "SOUTH TRAVANCORE HINDU COLLEGE, KOTTAR, NAGERCOIL, KANYAKUMARI"},
    {key : 39, label: "GOVERNMENT COLLEGE OF ENGINEERING, TIRUNELVELI"},
    {key : 40, label: "RANI ANNA GOVERNMENT COLLEGE FOR WOMEN, GANDHI NAGAR, TIRUNELVELI"},
    {key : 41, label: "GOVT.POLYTECHNIC COLLEGE, PALAYAMKOTTAI ROAD, THOOTHUKUDI"},
    {key : 42, label: "V.V.VANNIYA PERUMAL COLLEGE FOR WOMEN, VIRUDHUNAGAR"}
];

const YES_NO_ARRAY = [{label:'Yes',key:'Y'},{label:'No', key:'N'}];

const PARENT_OCCUPATION = [{key: 1, label: "Agriculture"},
    {key: 2, label: "Central Govt Employee"},
    {key: 3, label: "State Govt Employee"},
    {key: 4, label: "Professionals"},
    {key: 5, label: "Business"},
    {key: 6, label: "Self Employed"},
    {key: 7, label: "Others"}
];

const ANNUAL_INCOME = [{key: 1, label: "Less than 1 Lakh"},
    {key: 2, label: "1 lakh to 2.5 Lakh"},
    {key: 3, label: "2.5 Lakh to 6 Lakh"},
    {key: 4, label: "More than 6 Lakh"}
];

const HTTP_HEADERS = {
    'REQUEST_ID':'X-RequestID',
    'DEBUG_ID': 'X-Debug-ID'
};

const YEAR_OF_PASSING = [];
const currYear = new Date().getFullYear();

for(let i=2010;i<=2020;i++){
    const v = String(i);
    YEAR_OF_PASSING.push({key:v,label:v});
}

const QUALIFYING_EXAM = [ {key: '1', label: "HSC"},
    {key:'2', label: "CBSE"},
    {key: '3', label:"ICSE"},
    {key: '4', label: "Others"}];

const EXAM_BOARDS = [{key : '1', label:"Tamilnadu Board of Higher Secondary Education"},
    {key : '2', label:"Central Board of Secondary Education"},
    {key : '3', label:"Council for Indian School Certificate Examinations"},
    {key : '4', label:"Andhra Pradesh Board of Intermediate Education"},
    {key : '5', label:"Assam Higher Secondary Education Council"},
    {key : '6', label:"Bihar Intermediate Education Council"},
    {key : '7', label:"Goa Board of Secondary & Higher Secondary Education"},
    {key : '8', label:"Gujarat Secondary & Higher Education Board"},
    {key : '9', label:"Haryana Board of Education"},
    {key : '10', label:"Himachal Pradesh Board of School Education"},
    {key : '11', label:"J & K State Board of School Education"},
    {key : '12', label:"Karnataka Board of the Pre-University Education"},
    {key : '13', label:"Kerala Board of Higher Secondary Examinations"},
    {key : '14', label:"Maharashtra State Board of Secondary and Higher Secondary Education"},
    {key : '15', label:"Madhya Pradesh Board of Secondary Education"},
    {key : '16', label:"Manipur Council of Higher Secondary Education"},
    {key : '17', label:"Meghalaya Board of School Education"},
    {key : '18', label:"Mizoram Board of School Education"},
    {key : '19', label:"Nagaland Board of School Education"},
    {key : '20', label:"Orissa Council of Higher Secondary Education"},
    {key : '21', label:"Punjab School Education Board"},
    {key : '22', label:"Rajasthan Board of Secondary Education"},
    {key : '23', label:"Tripura Board of Secondary Education"},
    {key : '24', label:"U.P. Board of High School & Intermediate Education"},
    {key : '25', label:"West Bengal Council of Higher Secondary Education"},
    {key : '26', label:"Other Boards if any"}];

const MONTHS = [{key:1,label:'January'},{key:2,label:'February'},{key:3,label:'March'},{key:4,label:'April'},{key:5,label:'May'},{key:6,label:'June'},
    {key:7,label:'July'},{key:8,label:'August'},{key:9,label:'September'},{key:10,label:'October'},{key:11,label:'November'},{key:12,label:'December'}];

const MAX_MARKS = [{key:100,label:'100'},{key:150,label:'150'},{key:200,label:'200'},{key:300,label: '300'},{key:400,label:'400'}];

const HSC_GROUPS = [{key:1,label:'HSC Academic'},{key:2,label:'HSC Vocational'}];

const MEDIUM_OF_INSTRUCTION= [{key:1,label:'Tamil'},{key:2,label:'English'},{key:3,label:'Others'}];

module.exports = {
    EXAMINATION_BOARDS,
    DISTRICTS,
    STATES,
    DIST_LIST,
    MOTHER_TONGUE,
    CIVIC_STATUS,
    RELIGION,
    NATIONALITY,
    NATIVITY,
    COMMUNITY,
    CASTE,
    GENDER,
    STEPS,
    PAYMENT_STATUS,
    DIFF_ABLED_TYPES,
    TFC_CENTER,
    YES_NO_ARRAY,
    PARENT_OCCUPATION,
    ANNUAL_INCOME,
    HTTP_HEADERS,
    YEAR_OF_PASSING,
    EXAM_BOARDS,
    QUALIFYING_EXAM,
    MONTHS,
    MAX_MARKS,
    HSC_GROUPS,
    MEDIUM_OF_INSTRUCTION
};
