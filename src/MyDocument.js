import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Lateef",
  src: "https://cdn.jsdelivr.net/npm/@expo-google-fonts/lateef@0.2.0/Lateef_400Regular.ttf",
});
// Create styles
const styles = StyleSheet.create({
  page: {
    direction: "rtl",
    backgroundColor: "#E4E4E4",
    fontFamily: "Lateef",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document style={{ direction: "rtl" }} file={"musa"}>
    <Page size="A4" style={styles.page}>
      <Text>
        هذا نص تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم
        و لون الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق
        ادارة الموقع . يتم اضافة هذا النص كنص تجريبي للمعاينة فقط وهو لا يعبر عن
        أي موضوع محدد انما لتحديد الشكل العام للقسم او الصفحة أو الموقع. هذا نص
        تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون
        الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة
        الموقع . يتم اضافة هذا النص كنص تجريبي للمعاينة فقط وهو لا يعبر عن أي
        موضوع محدد انما لتحديد الشكل العام للقسم او الصفحة أو الموقع. هذا نص
        تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون
        الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة
        الموقع . يتم اضافة هذا النص كنص تجريبي للمعاينة فقط وهو لا يعبر عن أي
        موضوع محدد انما لتحديد الشكل العام للقسم او الصفحة أو الموقع. هذا نص
        تجريبي لاختبار شكل و حجم النصوص و طريقة عرضها في هذا المكان و حجم و لون
        الخط حيث يتم التحكم في هذا النص وامكانية تغييرة في اي وقت عن طريق ادارة
        الموقع{" "}
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
