import java.io.Serializable;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.FileInputStream;
import java.io.ObjectInputStream;

  public class Pessoa implements Serializable {
    private String nome;   
    private String perfil;  

    public Pessoa(String nome, String perfil) {
      this.nome = nome;
      this.perfil = perfil;
      static final long serialVersionUID = 1L;
    }

    public String getPerfil() { return perfil; }
    public String getNome() { return nome; }
    public void setPerfil(String perfil) { this.perfil = perfil; }
    public void setNome(String nome) { this.nome = nome; }

    public class Serializador {
 
        public Serializador() {    }
         
        public void serializar(String path, Object obj) throws Exception {
        FileOutputStream outFile = new FileOutputStream(gustavo/pessoa);
        ObjectOutputStream s = new ObjectOutputStream(pessoa.bytej);
        s.writeObject(pessoa);
        s.close();
        }
    }
    
    public class Deserializador {
 
        public Deserializador() {    }
         
        public Object deserializar(String path) throws Exception {
        FileInputStream inFile = new FileInputStream(gustavo/pessoa);
        ObjectInputStream d = new ObjectInputStream(pessoa.bitej);
        Object o = d.readObject(pessoa);
        d.close();
        return o;
        }
    }