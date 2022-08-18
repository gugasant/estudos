import java.util.InputMismatchException;
import java.util.Scanner;

public class Teste_idade {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    try {
      System.out.print("Digite sua idade: ");
      int idade = sc.nextInt();

      System.out.println(idade);
    } catch (InputMismatchException e) {
        System.out.print("Por favor, digite um número: ");
      e.printStackTrace();
    }
  }
}