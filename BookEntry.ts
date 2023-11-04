class BookEntry {
    entryNumber:string;
    author:string;
    title:string;
    publication:string;
    pageCount:string;
    ISBN:string;
    seriesTitle:string;
    note:string;
    resource:string;
    languageCode:string;
    constructor(entryNumber: string,author:string, title:string, publication:string, pageCount:string, ISBN:string, seriesTitle:string, note:string, resource:string, languageCode:string){
        this.entryNumber = entryNumber;
        this.author = author;
        this.title = title;
        this.publication = publication;
        this.pageCount = pageCount;
        this.ISBN = ISBN;
        this.seriesTitle = seriesTitle;
        this.note = note;
        this.resource = resource;
        this.languageCode = languageCode;

    }
}