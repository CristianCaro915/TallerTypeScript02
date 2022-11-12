export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    linkView: string;
    linkImg: string;
    
    constructor ( id: number, fullName: string, channelName: string, seasonsNum: number , description: string, linkView: string,
        linkImg: string){
        this.id=id;
        this.name=fullName;
        this.channel=channelName;
        this.seasons=seasonsNum;
        this.description=description;
        this.linkView=linkView;
        this.linkImg=linkImg;
    }
}