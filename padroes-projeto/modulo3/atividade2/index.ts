import { TextEditor } from "./models/text-editor";

const textEditor = new TextEditor();

textEditor.open();

textEditor.insertLine(1, "Titulo: To-do List");
textEditor.insertLine(3, "Fazer compras;");
textEditor.insertLine(4, "Estudar Programação;");
textEditor.insertLine(5, "Lavar o carro;");
textEditor.insertLine(6, "Passar um tempo com a família");

textEditor.removeLine(5);

textEditor.insertLine(2, "EOF");