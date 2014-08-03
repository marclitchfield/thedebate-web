App.Statement = DS.Model.extend({
  body: DS.attr('string'),
  score: DS.attr('number'),
  opposition: DS.attr('number'),
  support: DS.attr('number'),
});

App.Statement.FIXTURES = [
  { id: 1, score: 558, opposition: 190, support: 422, body: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 2, score: 582, opposition: 151, support: 382, body: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 3, score: 152, opposition: 35, support: 167, body: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' },
  { id: 4, score: 56, opposition: 8, support: 33, body: 'Ventress darth yowza gizka ubb danni boz leia. Hutt -lom darth qrygg jabba jar hallotan. Bib lars darth gamorrean aruzan ybith.' },
  { id: 5, score: 46, opposition: 31, support: 19, body: 'Dengar antonio calrissian kubaz obi-wan mon shistavanen antilles. Hissa senesca draethos draethos. Maarek shawda valorum shadda askajian gunray whiphid kubaz.' },
  { id: 6, score: 38, opposition: 44, support: 2, body: 'Lucas ipsum dolor sit amet wyl jusik geonosian elomin bane wicket tchuukthai elrood droid chadra-fan. Solo snivvian whitesun baba cracken shawda grievous.' },
  { id: 7, score: 31, opposition: 19, support: 15, body: 'Felth chommell hoth hutta r4-p17. Pavan thrawn boss kessel obi-wan boba tarasin anakin raynar' },
  { id: 8, score: 19, opposition: 6, support: 7, body: 'Yuzzum aparo roan nadon shistavanen. Jamillia kastolar kota skywalker muzzer. Lama stass zhell gendai. Organa vima-da-boda cliegg fode bren ric.' }
];