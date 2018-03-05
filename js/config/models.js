import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryFave = () => {
  return realm.objects("Fave");
};

export const createFave = id => {
  realm.write(() => {
    realm.create("Fave", { id: id, faved_on: new Date() });
  });
};

export const deleteFave = id => {
  realm.write(() => {
    const deleteFave = realm.objects("Fave").filtered("id == $0", id);
    realm.delete(deleteFave);
  });
};

export default realm;