import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    favedOn: 'date'
  }
};
const realm = new Realm({
  schema: [Fave]
});


export const queryFaves = () => {
  return realm.objects("Fave")
}


export const createFaves = id => {
  realm.write(() => {
    realm.create("Fave", {
      id: id,
      favedOn: new Date()
    });
  });
};


export const deleteFaves = id => {
  realm.write(() => {
    const faveToDelete = realm.objects("Fave").filtered('id == $0', id)
    realm.delete(faveToDelete); // delete Dexter :(
  });
}

export default realm;