import java.lang.reflect.Array;

public class main {
    public static void main(String[] args) {
        Zolushka[] zol = new Zolushka[3];
        zol[0] = new Zolushka(1,"Dina", 33);;
        zol[1] = new Zolushka(2,"Rita", 38);
        zol[2] = new Zolushka(3,"Anna", 40);

        Prince p = new Prince(1,"Dima",38);

        for (Zolushka zolush: zol){
            if (zolush.getSize() == p.getFoundedShoe()){
                System.out.println("id: " + zolush.getId() +" " + "name: " + zolush.getName() +" "+"size: " + zolush.getSize());
            }
        }

    }
}
