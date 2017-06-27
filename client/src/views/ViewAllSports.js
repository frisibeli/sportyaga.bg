import React from 'react';
import PropTypes from 'prop-types'
import viewallsports from '../styles/viewallsports.css';
import ViewAllSportsDescription from '../views/ViewAllSportsDescription';
import Multimedia from '../views/Multimedia';
import {Link} from 'react-router-dom';
import Page from '../components/Page';
import Header from '../components/Header'
const ViewAllSports = props => {
	const sports = [
		{name: "Айкидо", imgsrc: "aikido.jpeg", description: "Айкидо е съвременно японско бойно изкуство (гендай будо). Подобно на другите японски бойни изкуства, освен метод на самоотбрана, айкидо е и начин на духовно и физическо самоусъвършенстване. Името „айкидо“ се изписва с йероглифите „ай“ (съразмерност), „ки“ (енергия) и „до“ (път) и най-общо се превежда като „път на хармоничната сила“. Практикуващият айкидо се нарича айкидока. Освен това, в европейските езици се използва още айкидист. Айкидо е разработено от Морихей Уешиба (наричан от айкидистите О'Сенсей – „големият сенсей“) между 30-те и 60-те години на 20 век. В основата на айкидо залягат движения от древните школи Дайто-рю айки-джуцу и Иуама-рю кенджуцу, в които Уешиба се обучава като млад."},
		{name: "Аеробика", imgsrc: "aerobika.jpg", description: "Аеробиката или аеробните упражнения[1], наричани още кардио (от англ. cardio, което е съкратено от cardiovascular – сърдечносъдов), е комплекс от физически упражнения, които обикновено се изпълняват на фона на музика.Тя тренира и увеличава силата, мощността, гъвкавостта и координираността. Аеробиката е много популярна сред жените, които я практикуват на групи или пред телевизора."},
		{name: "Бадминтон", imgsrc: "badminton.jpg", description: "Бадминтонът (федербал, на немски: Federball) е спорт, който се играе от 2 или 4 души с помощта на ракети и перце на специално разчертано игрище с мрежа (висока 1,55 метра). Спортът има две хилядолетна история, като води началото си от Гърция, Индия и Китай. Международната федерация по бадминтон е основана през 1934 и има над 140 страни членки."},
		{name: "Баскетбол", imgsrc: "basketball.jpg", description: "Баскетболът (от английски: basketball) е отборен спорт с топка, който се играе от два отбора с по 5 играчи на правоъгълно игрище с размери 28×15 m. Всеки отбор се стреми да вкара топката в коша на противника. Кошовете са с диаметър 45,72 cm и са монтирани на височина 3,05 m на табло в двата насрещни края на игрището. Размерът на игралното поле е 28 метра (страничната линия) и 15 метра (линията под коша). Баскетболът е един от най-популярните и най-гледани спортове в света."},
		{name: "Бейзбол", imgsrc: "baseball.jpg", description: "Бейзболът (на английски: baseball, от base – „база“ и ball – „топка“) е вид отборна игра, особено популярна в Съединените щати, Венецуела, Куба, Панама и Япония. Топката, с която се играе бейзбол има обиколка девет инча (приблизитилено 23 сантиметра). Тя е твърда, с коркова сърцевина, обвита с конци и покрита с кожа."},
		{name: "Бокс", imgsrc: "box.jpg", description: "Боксът (на английски: boxing) е вид контактен спорт, при който играчите си нанасят един на друг удари със специални ръкавици. Боят се дели на 12 рунда и се контролира от съдия (рефер). Победа се присъжда тогава, когато съперникът е повален и не може да се повдигне в продължение на 10 секунди (нокаут) или ако получи травма, непозволяваща му да продължи боя (технически нокаут). Ако след края на рундовете боят не е прекратен, то победителят се определя чрез оценки от съдии."},
		{name: "Волейбол", imgsrc: "volleyball.jpg", description: "Волейболът (на английски: volleyball от volley – воле, удар по летяща топка [1] или просто летяща топка преди да докосне земята[2] и ball – топка) е вид колективна спортна игра с топка, по време на която два отбора се състезават на специална площадка, разделена с мрежа, като насочват топката в полето на противника така, че тя да падне на земята или противникът да допусне грешка. При това за организация на атака са допустими само три удара на топката."},
		{name: "Голф", imgsrc: "golf.jpg", description: "Голфът е спорт, в който индивидуални участници или отбори използват няколко вида стикове за да вкарат специални топки в поредица от дупки с минимален брой удари. Спортът се играе на специално игрище за голф. Като правило всяко отделно игрище има свой специфичен терен, но се състои или от 9, или от 18 дупки."},
		{name: "Гребане", imgsrc: "grebane.jpg", description: "Гребането е воден спорт с лодки. За него е характерно, че греблата имат опорна точка с лодката (за разлика от кану-каяк спорта, където греблата нямат опорна точка с лодката). Затова, за да работи греблото като лост, гребците седят с гръб към посоката на движение. При гребане те използват основно силата на краката си чрез специална седалка (наречена слайд) движеща се върху релси (наречени ролбани). Има 2 вида лодки – „разпашни“ (всеки гребец гребе с гребло, което държи с двете ръце) и „скул“ (всеки гребец гребе с 2 гребла, по едно във всяка ръка). Единият от гребците на двойната лодка се нарича носови – стои на носа и следи темпото (ритъма на загребване) на другия – наречен загребни, стоящ на бака на лодката."},
		{name: "Колоездене", imgsrc: "koloezdene.jpg", description: "Колоезденето е спорт, в който се организират състезания между спортисти, яздещи велосипеди. Състезанията могат да бъдат на различни настилки и терени и с различни велосипеди. Най-популярни са състезанията с така наречените „шосейни велосипеди“. Това са велосипеди с олекотена конструкция и тънки гуми за по-малко съпротивление и по-висока скорост. Състезателите носят каски и екипи, който подобряват аеродинамиката на велосипедиста. Състезанието се провежда на открит терен на голямо разстояние (обикновено около 150 – 200 километра) и има много участници. Провеждат се общи стартове и бягания по часовник (обикновено на малко по-късо разстояние), индивидуални и отборни състезания."},
		{name: "Фехтовка", imgsrc: "fehtofka.jpg", description: "Фехтовка е вид борба между двама или повече души използвайки различни по вид оръжия, както и ръкопашен бой. Терминът произлиза от немската дума „fechten“, бия се. Първоначално фехтовката е била приложима бойна система, а не спорт. В Европа е съществувала богата традиция на преподаването и усвояването ѝ, за което свидетелстват десетки учебници по фехтовка, най-ранният от които е от 13-ти век. Освен изцяло запазените фехтовални книги (Fechtbuecher) има запазени и отделни трактати, съчинения, изображения и прочее документи, разкриващи отношението на средновековния и ренесансов човек към фехтовката. Употребявани са различни оръжия – едноръчен меч, едноръчен меч и юмручен щит (бъклър), дълъг меч, копие и други."},
		{name: "Футбол", imgsrc: "football.jpg", description: "Футболът е отборен спорт, който се играе от два отбора по единадесет души със сферична топка,която тежи от 400 до 450 грама. Футболът е най-известният спорт на света.Футболът се играе на правоъгълно поле, покрито с естествена или изкуствена трева, като целта е топката да бъде вкарана във вратата на противника, при което се отбелязва гол. Вратите на двата отбора са разположени на късите страни на правоъгълното поле. По време на игра само вратарите имат право да докосват топката с ръка, а останалите играчи обикновено я ритат с крака и в редки случаи я пресрещат с тялото или главата си.Когато някой от полевите играчи (без вратаря) докосне топката с ръка главният съдия или отсъжда нарушение или показва червен или жълт картон на нарушителя."},
	];

	return (
	<div>
	<Header/>
    <Page title="Преглед на всички спортове">

    <div>
		<div >
			<Link to={'/adding-sport'} className="button is-primary">Добавяне на нов спорт</Link>
		</div>
		{/*<center><h1> Преглед на всички видове спорт </h1></center>*/}
	<table>
		<tr>
			<td width="400">
				<ul>
					{sports.map((sport, i) => {
						return (

						<li>
                            <Link to={'/sport-all/'+i}>
                                {sport.name}
                            </Link>
                        </li>
					)})}
				</ul>
			</td>
            <td>
                <ViewAllSportsDescription sport={props.match.params.currentSport}/>
                <Multimedia sport={props.match.params.currentSport}/>
            </td>
		</tr>
	</table>
	</div></Page>
	</div>
)};

export default ViewAllSports;
