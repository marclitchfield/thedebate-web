DebateApp.Debate = DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number')
});

DebateApp.Debate.FIXTURES = [
  { id: 1, score: 8293, title: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 2, score: 8112, title: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 3, score: 7822, title: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' },
  { id: 4, score: 7621, title: 'Ventress darth yowza gizka ubb danni boz leia. Hutt -lom darth qrygg jabba jar hallotan. Bib lars darth gamorrean aruzan ybith.' },
  { id: 5, score: 7601, title: 'Dengar antonio calrissian kubaz obi-wan mon shistavanen antilles. Hissa senesca draethos draethos. Maarek shawda valorum shadda askajian gunray whiphid kubaz.' },
  { id: 6, score: 5853, title: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 7, score: 4487, title: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 8, score: 4120, title: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' },
  { id: 9, score: 4002, title: 'Ventress darth yowza gizka ubb danni boz leia. Hutt -lom darth qrygg jabba jar hallotan. Bib lars darth gamorrean aruzan ybith.' },
  { id: 10, score: 3991, title: 'Dengar antonio calrissian kubaz obi-wan mon shistavanen antilles. Hissa senesca draethos draethos. Maarek shawda valorum shadda askajian gunray whiphid kubaz.' },
  { id: 11, score: 3984, title: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 12, score: 3766, title: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 13, score: 3681, title: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' },
  { id: 14, score: 3214, title: 'Ventress darth yowza gizka ubb danni boz leia. Hutt -lom darth qrygg jabba jar hallotan. Bib lars darth gamorrean aruzan ybith.' },
  { id: 15, score: 1552, title: 'Dengar antonio calrissian kubaz obi-wan mon shistavanen antilles. Hissa senesca draethos draethos. Maarek shawda valorum shadda askajian gunray whiphid kubaz.' },
  { id: 16, score: 156, title: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 17, score: 82, title: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 18, score: 55, title: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' },
  { id: 19, score: 12, title: 'Ventress darth yowza gizka ubb danni boz leia. Hutt -lom darth qrygg jabba jar hallotan. Bib lars darth gamorrean aruzan ybith.' },
  { id: 20, score: 8, title: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 21, score: 4, title: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' }
];