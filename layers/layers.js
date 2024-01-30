var wms_layers = [];


        var lyr_CartoDBPositron_0 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Parcelswithincitylimits_1 = new ol.format.GeoJSON();
var features_Parcelswithincitylimits_1 = format_Parcelswithincitylimits_1.readFeatures(json_Parcelswithincitylimits_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelswithincitylimits_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelswithincitylimits_1.addFeatures(features_Parcelswithincitylimits_1);
var lyr_Parcelswithincitylimits_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelswithincitylimits_1, 
                style: style_Parcelswithincitylimits_1,
                interactive: true,
                title: '<img src="styles/legend/Parcelswithincitylimits_1.png" /> Parcels within city limits'
            });

lyr_CartoDBPositron_0.setVisible(true);lyr_Parcelswithincitylimits_1.setVisible(true);
var layersList = [lyr_CartoDBPositron_0,lyr_Parcelswithincitylimits_1];
lyr_Parcelswithincitylimits_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid': 'fid', 'PARCEL_TYP': 'PARCEL_TYP', 'MAP': 'MAP', 'PARCELID': 'Parcel Number', 'PARCELID2': 'PARCELID2', 'PARCEL': 'PARCEL', 'CALC_ACRE': 'CALC_ACRE', 'CODE': 'CODE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'GlobalID': 'GlobalID', 'layer': 'layer', 'path': 'path', });
lyr_Parcelswithincitylimits_1.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'Shape_STAr': 'Hidden', 'Shape_STLe': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'fid': 'Hidden', 'PARCEL_TYP': 'Hidden', 'MAP': 'Hidden', 'PARCELID': 'TextEdit', 'PARCELID2': 'Hidden', 'PARCEL': 'Hidden', 'CALC_ACRE': 'Hidden', 'CODE': 'Hidden', 'created_us': 'Hidden', 'created_da': 'Hidden', 'last_edite': 'Hidden', 'last_edi_1': 'Hidden', 'GlobalID': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_Parcelswithincitylimits_1.set('fieldLabels', {'PARCELID': 'no label', });
lyr_Parcelswithincitylimits_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});