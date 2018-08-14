<template>
  <div class="container-fuild">
    <div class="padding"></div>
    <div class="container">
      <el-row class="block_information" :gutter="1">
        <el-col :sm="24" :md="14">
          <div class="necessary_information">
            <nuxt-link v-for="information of necessaryInformation" :key="information.id" :to="information.link"><p>{{information.title}}</p></nuxt-link>
          </div>
        </el-col>
        <el-col :sm="24" :md="10">
          <el-row class="support">
            <el-col :sm="24" :md="10">
              <div>
                <p class="support_title">Tư vẫn miễn phí (24/7)</p>
                <nuxt-link to=""><h4>1800 6601</h4></nuxt-link>
              </div>
              <div>
                <p class="support_title deep">Hỗ trợ thanh toán:</p>
                <div class="support_card">
                  <nuxt-link v-for="card of cardSupport" :key="card.id" :to="card.link">
                    <img :src="card.img" :alt="card.name" :title="card.name">
                  </nuxt-link>
                </div>
              </div>
            </el-col>
            <el-col :sm="24" :md="14">
              <div>
                <p class="support_title">Góp ý phản ánh(8h00 - 22h00)</p>
                <nuxt-link to=""><h4>1800 6616</h4></nuxt-link>
              </div>
              <div>
                <p class="support_title deep">Chứng nhận:</p>
                <nuxt-link v-for="cer of certificate" :key="cer.id" :to="cer.link">
                  <img :src="cer.img" :alt="cer.name" :title="cer.name">
                </nuxt-link>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="font_mini text-center">
      <small>© 2007 - 2018 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 Khánh Hội, P5, Q4, TP. Hồ Chí Minh /
        GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày
        02/07/2018. Điện thoại: (028)73023456. Email: fptshop@fpt.com.vn. Chịu trách nhiệm nội dung: Trần Quốc Nhật.
      </small>
    </div>
  </div>
</template>
<style scoped>
  .padding {
    height: 30px;
    width: 100%;
    background-color: #f3f3f3;
  }

  .container-fuild {
    background-color: #fff;
  }

  .block_information {
    margin: 0 -15px;
    padding: 25px 0 15px;
  }

  .necessary_information {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .necessary_information p {
    font-size: 13px;
    line-height: 1.2em;
    color: #3399d2;
  }

  .necessary_information p:hover {
    color: #000;
  }

  .support h4 {
    font-weight: bold;
    line-height: 0.3em;
    padding-bottom: 17px;
    color: #d0021b;
  }

  .support_title {
    font-size: 14px;
    line-height: 1.2em;
  }

  .deep {
    font-weight: bold;
  }

  .support_card {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .font_mini {
    font-size: 13px;
    padding: 10px;
    background: #f3f3f3;
  }
</style>

<script>
  export default {
    data() {
      return {
        necessaryInformation: [
          {title: "Giới thiệu về công ty", link: ""},
          {title: "Tin tuyển dụng", link: ""},
          {title: "Hệ thống cửa hàng", link: ""},
          {title: "Câu hỏi thường gặp khi mua hàng", link: ""},
          {title: "Tin khuyến mãi", link: ""},
          {title: "Kiểm tra cửa hàng Apple chính hãng", link: ""},
          {title: "Các chính sách FPT Shop", link: ""},
          {title: "Hướng dẫn mua hàng online", link: ""},
          {title: "Giới thiệu máy đổi trả", link: ""},
          {title: "Hệ thống bảo hành", link: ""},
          {title: "Hướng dẫn mua trả góp", link: ""},
          {title: "Giới thiệu xả hàng", link: ""}
        ],
        cardSupport: [
          {
            name: "Visa",
            img:
              "https://www.nganluong.vn//css/newhome/img/brand/VISA.png",
            link: ""
          },
          {
            name: "MasterCard",
            img:
              "https://www.nganluong.vn//css/newhome/img/brand/MASTER.png",
            link: ""
          },
          {
            name: "PayPal",
            img:
              "https://www.nganluong.vn//css/newhome/img/brand/PayPal.png",
            link: ""
          }
        ],
        certificate: [
          {
            name: "Bộ công thương",
            img:
              "https://www.nganluong.vn//css/newhome/img/nl-icon/dss.png",
            link: ""
          },
          {
            name: "Pci",
            img:
              "https://www.nganluong.vn//css/newhome/img/nl-icon/pci.png",
            link: ""
          }
        ]
      }
    }
  }
</script>
