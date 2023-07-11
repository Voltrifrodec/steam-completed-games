const STATUS_IMPERFECT = 'NotPerfectGame';
const STATUS_PERFECT = 'PerfectGame';
const STATUS_NO_ACHIEVEMENTS = 'NoAchievementsGame';
const NONEXISTING_URL_LINK = `https://store.steampowered.com/`;

const NumberFormattingDE = (input_number) => Intl.NumberFormat('de-DE').format(input_number);
const NumberFormattingEN = (input_number) => Intl.NumberFormat('en-IN').format(input_number);
const NumberFormattingJP = (input_number) => Intl.NumberFormat('jp-JP').format(input_number);


const GAME_DATABASE = [
    {
        game_name: `100 hidden frogs`,
        game_playtime: NumberFormattingEN(7) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/1806840/100_hidden_frogs/`,
        game_notes: `Good game!`,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `18+`,
        game_playtime: NumberFormattingEN(12) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/877360/18/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `2ECONDS TO STΔRLIVHT: Forever My Diamond`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1329110/2ECONDS_TO_STRLIVHT_Forever_My_Diamond/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `2ECONDS TO STΔRLIVHT: My Heart's Reflection`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1479030/2ECONDS_TO_STRLIVHT_My_Hearts_Reflection/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `A Date in the Park`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/468530/A_Date_in_the_Park/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Achievement Clicker`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/743640/Achievement_Clicker/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Achievement Clicker 2018`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/771350/Achievement_Clicker_2018`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Achievement Clicker 2019`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/824190/Achievement_Clicker_2019`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Achievement Printer`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/806140/Achievements_printer/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Alice in Stardom - A Free Idol Visual Novel`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1054560/Alice_in_Stardom__A_Free_Idol_Visual_Novel/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `ALLBLACK Phase 1`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1134450/ALLBLACK_Phase_1/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `A Long Time`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1594900/A_long_Time/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Ambre - a heartbreaking kinetic novel`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/623840/Ambre__a_heartbreaking_kinetic_novel/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Angels That Kill (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/383240/Angels_That_Kill__The_Final_Cut/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Andarilho`,
        game_playtime: NumberFormattingEN(2.6) + "hours",
        game_steam_url: `https://store.steampowered.com/app/450860/Andarilho/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Antenna`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/443580/Antenna/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `A Pinch of Magic`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1587180/A_Pinch_of_Magic/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Ascension: Transition and Silver`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1523150/Ascension_Transition_and_Silver/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Blob From Space (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/315070/Blob_From_Space/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Blossoms Bloom Brightest`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/437720/Blossoms_Bloom_Brightest/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Bongo Arena`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1564660/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Bubble People`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1710930/Bubble_People/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `ButcherBoy`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/826160/ButcherBoy/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Carpe Diem`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/423880/Carpe_Diem/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Cave Crawler`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1865440/Cave_Crawler/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Chaos`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1230410/Chaos/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Clawface`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/785130/Clawface/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Confess My Love`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/637850/Confess_My_Love/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Connected Hearts - Visual Novel`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/603140/Connected_Hearts__Visual_novel/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `CrocoMars`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/798280/CrocoMars/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Cuit`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/614890/Cuit/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `CUPID - A free to play Visual Novel`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/421670/CUPID__A_free_to_play_Visual_Novel/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Cursed Sight (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: NONEXISTING_URL_LINK,
        game_notes: `Demo not available anymore`,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: 'no_demo'
    },
    {
        game_name: `Das Balkonzimmer`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1472740/Das_Balkonzimmer/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Death and Taxes (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1166290/Death_and_Taxes/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Destiny Island`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1522180/Destiny_Island/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Dev Guy`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/351800/Dev_Guy/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Dinosaur Hunt Puzzle`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/874400/Dinosaur_Hunt_Puzzle/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Discouraged Workers (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: NONEXISTING_URL_LINK,
        game_notes: `Demo not available anymore`,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: 'no_demo'
    },
    {
        game_name: `Disturbed`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/529780/Disturbed/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Double Damnation`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1015190/Double_Damnation/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/409160/Dr_Langeskov_The_Tiger_and_The_Terribly_Cursed_Emerald_A_Whirlwind_Heist/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Dragon Souls`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/510370/Dragon_Souls/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `DUMB Infernal`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1208370/DUMB_Infernal/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Emily is Away`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/417860/Emily_is_Away/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Endless Furry Pinball 2D`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1560320/Endless_Furry_Pinball_2D/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Endless Furry Ping-Pong`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1590030/Endless_Furry_PingPong/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Eternal Hour: Golden Hour`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/734910/Eternal_Hour_Golden_Hour/`,
        game_notes: `Install patch for the remaining achievement. NSFW warning.`,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Evening surprise`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/690930/Evening_Surprise/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Enigma Prison (Beta)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/500740/Enigma_Prison/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `First Snow`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1259430/First_Snow/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Flowering Nightshade`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1652030/Flowering_Nightshade/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Free to Play`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/245550/Free_to_Play/`,
        game_notes: `Actually it's video`,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Frightened Beetles`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/823830/Frightened_Beetles/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Frosty Kiss`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/431540/Frosty_Kiss/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Good Morning World`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1271580/Good_Morning_World/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Gordon Adventure`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1577970/Gordon_Adventure/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Half-Life`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/70/HalfLife/`,
        game_notes: ``,
        game_status: STATUS_NO_ACHIEVEMENTS.toString(),
        additional_classes: ''
    },
    {
        game_name: `Half-Life 2`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/220/HalfLife_2/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Hamster`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1583410/Hamster/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Happy New Year, Zeliria!`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1490190/Happy_New_Year_Zeliria/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Helltaker`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1289310/Helltaker/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Holy Shit`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1993910/Holy_Shit/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `How To Cope With Boredom and Loneliness`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/797390/How_To_Cope_With_Boredom_and_Loneliness/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Chaos`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1230410/Chaos/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Jiangshi x Daoshi`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1338460/Jiangshi_x_Daoshi/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Kid,napper: Gosh, I'm Kidnapped by a Pupil (关于我被小学女生绑架这件事)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/862690/Kidnapper_Gosh_Im_Kidnapped_by_a_Pupil/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Krunker`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1408720/Krunker/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Lines X`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/724740/Lines_X/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Lines X Free`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/725340/Lines_X_Free/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Loading Screen Simulator`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/652980/Loading_Screen_Simulator/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Loot Grind Simulator`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1420050/Loot_Grind_Simulator/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Lost girl's [diary]`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/445230/Lost_girls_diary/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Machine Hunt`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/546930/Machine_Hunt/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Mini-Dead`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/851530/MiniDead/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Missing Translation`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/395520/Missing_Translation/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Mitoza`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1516240/Mitoza/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Mu Complex (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/383690/Mu_Complex/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Mushroom Cats`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1071120/Mushroom_Cats/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `My Sweet Washing Machine!`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1444730/My_Sweet_Washing_Machine/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Nightork Adventures - Beyond the Moons of Shadalee`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/493780/Nightork_Adventures__Beyond_the_Moons_of_Shadalee/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Nightork Adventures 2 - Legacy of Chaos`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/688630/Nightork_Adventures_2__Legacy_of_Chaos/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Nonogram - Master's Legacy`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/742500/Nonogram__Masters_Legacy/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `OH MY GOD, LOOK AT THIS KNIGHT`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/781440/OH_MY_GOD_LOOK_AT_THIS_KNIGHT/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Oik`,
        game_playtime: NumberFormattingEN(38) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/588970/Oik/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Oik 2`,
        game_playtime: NumberFormattingEN(44) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/611980/Oik_2/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `One Thousand Lies`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/463390/One_Thousand_Lies/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Panzer Hearts - War Visual Novel`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/809680/Panzer_Hearts__War_Visual_Novel/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Project H`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1644720/Project_H/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Project Speed`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1201940/Project_Speed/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Racecar.io`,
        game_playtime: NumberFormattingEN(0.3) + ' hours',
        game_steam_url: `https://store.steampowered.com/app/539640/Racecario/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Re: Award`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1390860/Re_Award/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Red Wake Carnage`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/656610/Red_Wake_Carnage/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Reflex`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/745740/Reflex/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Riaaf The Spider`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/647040/Riaaf_The_Spider/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Rifle Strike`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1553420/Rifle_Strike/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Robin`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/671720/Robin/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Samorost 1`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1580970/Samorost_1/`,
        game_notes: ``,
        game_status: STATUS_NO_ACHIEVEMENTS.toString(),
        additional_classes: ''
    },
    {
        game_name: `Sepia Tears`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/429300/Sepia_Tears/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `She Remembered Caterpillars (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: NONEXISTING_URL_LINK,
        game_notes: `Demo not available anymore`,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: 'no_demo'
    },
    {
        game_name: `Six Days of Snow`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/754810/Six_Days_of_Snow/`,
        game_notes: `Demo not available anymore`,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: 'no_demo'
    },
    {
        game_name: `SLEEPOVER`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/308540/SLEEPOVER/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ``
    },
    {
        game_name: `Snapshot`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1569690/Snapshot/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Solenars Edge Heroes`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/847450/Solenars_Edge_Heroes/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Solenars Edge Rebirth`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/679470/Solenars_Edge_Rebirth/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Something for Someone Else`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1115980/Something_for_Someone_Else/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Space Between Worlds`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/779990/Space_Between_Worlds/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Space of Darkness`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/666310/Space_of_Darkness/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Star Vortex`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1671770/Star_Vortex/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Tessa's Ark`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/652030/Tessas_Ark/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The BUTTON by Elendow`,
        game_playtime: NumberFormattingEN(35) + " minutes",
        game_steam_url: `https://store.steampowered.com/app/1999740/THE_BUTTON_by_Elendow/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Cursed Tower`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/705370/The_Cursed_Tower/`,
        game_notes: ``,
        game_status: STATUS_NO_ACHIEVEMENTS.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Lost Mythologies`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/372540/The_Lost_Mythologies/`,
        game_notes: `Read either discussion or guide for tutorial on how to download old version for getting the achievement. Might add it here in the future.`,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Mammoth: A Cave Painting`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/751690/The_Mammoth_A_Cave_Painting/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Mind of Marlo`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/722870/The_Mind_of_Marlo/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Monster Inside`,
        game_playtime: NumberFormattingEN(12) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/665490/The_Monster_Inside/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Plan`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/250600/The_Plan/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `There is No Game: Jam Edition 2015`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1241700/There_Is_No_Game_Jam_Edition_2015/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Rest of Our Lives`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1169170/The_Rest_of_Our_Lives/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Sad Story of Emmeline Burns`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/429940/The_Sad_Story_of_Emmeline_Burns/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Stanley Parable (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/221910/The_Stanley_Parable/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Witch in the Forest`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1419740/The_Witch_in_the_Forest/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `The Witcher 1`,
        game_playtime: NumberFormattingEN(34.3) + ' hours',
        game_steam_url: `https://store.steampowered.com/app/20900/The_Witcher_Enhanced_Edition_Directors_Cut/`,
        game_notes: `Enhanced Edition`,
        game_status: STATUS_NO_ACHIEVEMENTS.toString(),
        additional_classes: ''
    },
    {
        game_name: `TitTok 3 (Demo)`,
        game_playtime: NumberFormattingEN(6) + ' minutes',
        game_steam_url: `https://store.steampowered.com/app/2003220/TitTok_3/`,
        game_notes: `Demo not available anymore`,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Totally Unbalanced`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/487330/Totally_Unbalanced/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `TREE`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/888090/TREE/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Unstoppable Gorg (Demo)`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/18120/Unstoppable_Gorg/`,
        game_notes: `It is written in the Perfect games, yet it doesn't match with the overall amount of perfect games, weird. Also, demo not available`,
        game_status: STATUS_NO_ACHIEVEMENTS.toString(),
        additional_classes: ''
    },
    {
        game_name: `Virtual Cottage`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/1369320/Virtual_Cottage/`,
        game_notes: ``,
        game_status: STATUS_PERFECT.toString(),
        additional_classes: ''
    },
    {
        game_name: `Without Within`,
        game_playtime: NumberFormattingEN(0),
        game_steam_url: `https://store.steampowered.com/app/345650/Without_Within/`,
        game_notes: ``,
        game_status: STATUS_IMPERFECT.toString(),
        additional_classes: ''
    },

    
    //? Template
    // {
    //     game_name: ``,
    //     game_playtime: NumberFormattingDE(0),
    //     game_steam_url: ``,
    //     game_notes: ``,
    //     game_status: STATUS_IMPERFECT.toString()
    // },
];


//? Perfect Games Counter
var perfect_games_counter = 0,not_perfect_games_counter = 0, no_achievements_games_counter = 0;
for(let i = 0; i < GAME_DATABASE.length; i++) {
    if(GAME_DATABASE[i].game_status == STATUS_PERFECT.toString()) {
        perfect_games_counter++;
        // console.log(`${perfect_games_counter}. -> ${GAME_DATABASE[i].game_name}`);
    } else
    if(GAME_DATABASE[i].game_status == STATUS_NO_ACHIEVEMENTS.toString()) {
        no_achievements_games_counter++;
        // console.log(`${no_achievements_games_counter}. -> ${GAME_DATABASE[i].game_name}`);
    }
    else not_perfect_games_counter++;
}
$('perfect-games-counter').html(perfect_games_counter);
$('not-perfect-games-counter').html(not_perfect_games_counter);
$('no-achievements-games-counter').html(no_achievements_games_counter);
$('games-total').html(perfect_games_counter + not_perfect_games_counter + no_achievements_games_counter);

const loadValues = new Vue({
    el: 'better-table',
    data: { game_data: GAME_DATABASE }
});
